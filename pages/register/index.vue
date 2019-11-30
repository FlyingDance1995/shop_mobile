<template>
  <div class="register">
    <vue-particles class="background-partical" color="#dedede"></vue-particles>
    <div class="register-section">
      <div class="register-form flex-column animated fadeInUp faster">
        <div v-if="state === 'INIT'">
          <div style="text-align: center;">

            <div class="flex-row middle fs-xl"
                 style="height: 30px; width: 100%">
              <a href="/home">
                C1702L
              </a>
            </div>

            <div class="flex-row middle mb-xl">
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

          <Form ref="registerForm"
                :model="registerModel"
                :rules="registerValidate"
                @submit.native.prevent="submit"
                style="flex: 1; margin-top: 30px; width: 350px;">
            <FormItem prop="email" :error="emailError">
              <Input v-model.trim="registerModel.email"
                     size="large"
                     type="email"
                     placeholder="Email"
                     @focus="error = null">
                <Icon type="md-mail" slot="prepend"/>
              </Input>
            </FormItem>

            <FormItem prop="username" :error="usernameError">
              <Input v-model.trim="registerModel.username"
                     size="large"
                     placeholder="Username"
                     @focus="error = null">
                <Icon type="ios-contact"
                      size="18"
                      slot="prepend"/>
              </Input>
            </FormItem>

            <FormItem prop="password" :error="passwordError">
              <Input v-model.trim="registerModel.password"
                     size="large"
                     type="password"
                     placeholder="Mật khẩu"
                     @focus="error = null">
                <Icon type="md-lock" slot="prepend"/>
              </Input>
            </FormItem>

            <FormItem prop="firstName">
              <Input v-model.trim="registerModel.firstName"
                     size="large"
                     placeholder="Tên"
                     @focus="error = null">
                <div slot="prepend"
                     style="width: 16px">
                  T
                </div>
              </Input>
            </FormItem>

            <!--<FormItem prop="lastName">-->
              <!--<Input v-model.trim="registerModel.lastName"-->
                     <!--size="large"-->
                     <!--placeholder="Họ đệm"-->
                     <!--@focus="error = null">-->
                <!--<i class="icon icon-type" slot="prepend"></i>-->
              <!--</Input>-->
            <!--</FormItem>-->

            <!--ERROR-->
            <FlexRow tag="div" style="padding: 5px 0; justify-content: center;" v-if="error">
              <span class="text-danger">{{ error }}</span>
            </FlexRow>
            <!--END ERROR-->

            <Button html-type="submit"
                    type="primary"
                    style="width: 100%;"
                    size="large"
                    :loading="loading">
              <span v-if="!loading">Đăng ký</span>
              <span v-else>Đang xử lý...</span>
            </Button>
          </Form>

          <div class="flex-row center mt-xs mb-xs fs-md"
               style="justify-content: space-between;">
            <router-link to="/login"
                         class="hover-underline">
                Đăng nhập
            </router-link>
            <router-link to="/forgot-password"
                         class="hover-underline">
                Quên mật khẩu?
            </router-link>
          </div>
        </div>

        <div v-if="state === 'REGISTERED'" class="align-center pt-xl">
          <img src="/img/payment-success.png" height="160" width="auto" alt="" class="mb-xl">
          <h3 class="mb-lg">Email đã được gửi!</h3>
          <p>Email xác thực tài khoản đã được gửi đến <b>{{ authInfo.email }}</b>.</p>
          <p>Vui lòng làm theo hướng dẫn trong email!</p>
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
  .register {
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .register-section{
      margin-top: 4%;
      position: relative;
      z-index: 1;
      .register-form{
        background: #fff;
        padding: 30px 20px 35px 20px;
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
  import { mapGetters } from 'vuex';
  import utils from '@/utils';
  import Vue from 'vue'
  import VueParticles from 'vue-particles'
  Vue.use(VueParticles);

  export default {
    name: 'Register',

    layout: "fullscreen",

    created() {
      localStorage.clear();
    },

    data() {
      return {
        state: this.authInfo ? 'REGISTERED' : 'INIT',
        loading: false,
        error: null,
        emailError: '',
        usernameError: '',
        passwordError: '',
        registerModel: {
          email: '',
          username: '',
          password: '',
          firstName: '',
          lastName: ''
        },
        registerValidate: {
          email: {
            required: true,
            message: 'Vui lòng điền vào email',
            trigger: 'blur',
          },
          username: {
            required: true,
            message: 'Vui lòng điền vào username',
            trigger: 'blur',
          },
          password: {
            validator: this.validatePass,
            trigger: 'blur',
          },
          firstName: {
            required: true,
            message: 'Vui lòng điền vào tên',
            trigger: 'blur',
          },
          lastName: {
            required: true,
            message: 'Vui lòng điền vào họ đệm',
            trigger: 'blur',
          },
        },
      };
    },

    computed: {
      ...mapGetters([
        'authInfo'
      ]),

      emailSupport(){
        return process.env.SUPPORT_EMAIL;
      }
    },

    methods: {
      validatePass(rule, value, callback) {
        if (value === '') {
          callback(new Error('Vui lòng điền vào mật khẩu'));
        } else if (value.length < 8) {
          callback(new Error('Mật khẩu phải có độ dài tối thiểu 8 kí tự'));
        } else {
          callback();
        }
      },

      submit() {
        this.error = null;
        this.emailError = '';
        this.usernameError = '';
        this.passwordError = '';
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            this.$services.auth.register({
              email: this.registerModel.email,
              username: this.registerModel.username,
              first_name: this.registerModel.firstName,
              last_name: this.registerModel.lastName,
              password1: this.registerModel.password,
              password2: this.registerModel.password,
            }).then((response) => {
              this.loading = false;
              this.state = 'REGISTERED';
              this.$store.commit('updateVersion', {data: process.env.VUE_APP_VERSION});
              this.$store.commit('updateToken', {data: response.body.token});
              this.$store.commit('updateAuthInfo', {data: response.body.user});
            }, (error) => {
              this.loading = false;
              if (error.status === 400) {
                this.emailError = error.body.email ? error.body.email[0] : '';

                if(this.emailError === "A user is already registered with this e-mail address.") {
                  this.emailError = 'Email đã được sử dụng';
                }

                this.usernameError = error.body.username ? error.body.username[0] : '';
                if(this.usernameError === "A user with that username already exists.") {
                  this.usernameError = 'Username đã được sử dụng';
                }

                this.passwordError = error.body.password1 ? error.body.password1[0] : '';
                if(this.passwordError.length > 0) {
                  this.passwordError = 'Hãy thử mật khẩu khác';
                }
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
