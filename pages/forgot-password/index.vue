<template>
  <div class="forgot-password">
    <vue-particles class="background-partical" color="#dedede"></vue-particles>
    <div class="forgot-password-section">
      <div class="forgot-password-form flex-column animated fadeInUp faster">
        <div v-if="state === 'INIT'">
          <div class="align-center">

            <div class="flex-row middle fs-xl"
                 style="height: 30px; width: 100%">
              <a href="/home">
                C1702L
              </a>
            </div>

            <div class="flex-row middle mb-lg">
              <div style="margin-right: 4px">
                <small>
                  Một sản phẩm của
                </small>
              </div>

              <a href="https://www.facebook.com/groups/1293181877431743/?ref=bookmarks"
                 target="_blank"
                 style="color: #1A8CCF">
                <small>
                  lớp C1702L
                </small>
              </a>
            </div>
          </div>

          <h6 class="mb-xs">
            Nhận mật khẩu mới qua email!
          </h6>

          <Form ref="forgotPasswordForm"
                :model="forgotPasswordModel"
                :rules="forgotPasswordValidate"
                @submit.native.prevent="submit"
                style="flex: 1; width: 350px;">
            <FormItem prop="email" :error="emailError">
              <Input v-model.trim="forgotPasswordModel.email"
                     size="large"
                     placeholder="Email"
                     @focus="error = null">
                <Icon type="md-mail" slot="prepend"/>
              </Input>
            </FormItem>

            <!--ERROR-->
            <FlexRow v-if="error"
                     tag="div"
                     style="padding: 5px 0; justify-content: center;">
              <span class="text-danger">
                {{ error }}
              </span>
            </FlexRow>
            <!--END ERROR-->

            <Button html-type="submit"
                    type="primary"
                    style="width: 100%; margin-top: 4px"
                    size="large"
                    :loading="loading">
              <span v-if="!loading">Gửi email</span>
              <span v-else>Đang xử lý...</span>
            </Button>
          </Form>

          <div class="flex-row center mt-xs mb-xs fs-md" style="justify-content: space-between;">
            <router-link to="/login"
                         class="hover-underline">
              Đăng nhập
            </router-link>

            <router-link to="/register"
                         class="hover-underline">
              Đăng kí tài khoản
            </router-link>
          </div>
        </div>

        <div v-if="state === 'SENT'" class="align-center pt-xl">
          <img src="/img/payment-success.png" height="90" width="auto" alt="" class="mb-xl">
          <h3 class="mb-lg">Email đã được gửi!</h3>
          <p>Email hướng dẫn tạo mật khẩu mới đã được gửi đến <b>{{ forgotPasswordModel.email }}</b>.</p>
          <p>Hãy làm theo hướng dẫn trong email!</p>
        </div>
      </div>

      <div style="width: 100%; text-align: center; margin-top: 30px;">
        <a :href="`mailto:${emailSupport}`"
           class="hover-underline">
          Liên hệ: {{ emailSupport }}
        </a>
        <br>
        chúng tôi luôn sẵn sàng hỗ trợ!
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .forgot-password {
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .forgot-password-section{
      margin-top: 12%;
      position: relative;
      z-index: 1;
      .forgot-password-form{
        background: #fff;
        padding: 35px 20px 35px 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
    }
    .background-partical{
      position: absolute;
      width: 100%;
      height: 100vh;
    }
  }
</style>

<script>
  import Vue from 'vue'
  import VueParticles from 'vue-particles'
  Vue.use(VueParticles);

  export default {
    name: 'ForgotPassword',

    layout: 'fullscreen',

    created() {
      localStorage.clear();
    },

    data() {
      return {
        state: 'INIT',
        loading: false,
        error: null,
        emailError: '',
        forgotPasswordModel: {
          email: '',
        },
        forgotPasswordValidate: {
          email: {
            required: true,
            message: 'Vui lòng cung cấp email',
            trigger: 'blur',
          }
        },
      };
    },

    computed: {
      emailSupport(){
        return process.env.SUPPORT_EMAIL;
      }
    },

    methods: {
      submit() {
        this.error = null;
        this.emailError = '';
        this.$refs.forgotPasswordForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            this.$services.auth.forgotPassword(this.forgotPasswordModel).then((response) => {
              this.loading = false;
              this.state = 'SENT';
            }, (error) => {
              this.loading = false;
              if (error.status === 400) {
                this.emailError = 'Email không tồn tại!';
              } else {
                this.error = 'Có lỗi xảy ra. Vui lòng thử lại sau!';
              }
            });
          }
        });
      },
    },
  };
</script>
