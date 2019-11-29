<template>
  <div class="login">
    <vue-particles class="background-partical" color="#dedede"></vue-particles>

    <div class="login-section">
      <div class="login-form screen-getting-form">
        <Form ref="loginForm"
              :model="vmLogin"
              style="width: 400px"
              :rules="ruleInline">
          <!--<svg class="icon-white mb-xl"-->
               <!--style="height: 30px; width: 278px">-->
            <!--<use :xlink:href="`#${productName}`" xmlns:xlink="http://www.w3.org/1999/xlink"></use>-->
          <!--</svg> -->
          <div class="icon-white mb-xl flex-row middle space-between"
               style="height: 30px; width: 100%">
             <p class="fs-xl">
               C1702L
             </p>

            <nuxt-link to="/home"
                       class="flex-row middle cursor">
              <span class="mr-xs">
                home
              </span>

              <img src="@/assets/images/right-chevron.svg"
                   width="12"
                   style="cursor: pointer"
                   alt="">
            </nuxt-link>
          </div>

          <FormItem prop="email">
            <Input type="text"
                   class="input-getting-form"
                   v-model="vmLogin.email"
                   @on-focus="error = ''"
                   placeholder="Username">
            </Input>
          </FormItem>

          <FormItem prop="password">
            <Input type="password"
                   class="input-getting-form"
                   @on-focus="error = ''"
                   v-model="vmLogin.password"
                   placeholder="Password">
            </Input>

            <div v-if="error"
                 style="margin-bottom: -32px">
              <p class="txt-error">
                {{ error }}
              </p>
            </div>
          </FormItem>

          <div class="pt-sm">
            <FormItem>
              <Button type="primary"
                      :loading="loading"
                      long
                      class="btn-login btn-getting-form"
                      @click="handleSubmit">
                Đăng nhập
              </Button>
            </FormItem>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<!--<style scoped>-->
  <!--.bg {-->
    <!--/*background-image: url("../../assets/images/bg-login.png");*/-->
    <!--object-fit: cover;-->
    <!--background-repeat: no-repeat;-->
    <!--background-size: cover;-->
    <!--position: fixed;-->
    <!--top: 0;-->
    <!--left: 0;-->
    <!--right: 0;-->
    <!--bottom: 0;-->
  <!--}-->
<!--</style>-->

<style scoped lang="less">
  .login {
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .login-section {
      margin-top: 11%;
      position: relative;
      z-index: 1;

      .login-form {
        background: #fff;
        border-radius: 5px;
        padding: 35px 20px 45px 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      }
    }

    .background-partical {
      position: absolute;
      width: 100%;
      height: calc(100vh);
    }
  }
</style>

<script>
  import {mapMutations} from 'vuex';
  import Vue from 'vue'
  import VueParticles from 'vue-particles'
  Vue.use(VueParticles)

  export default {
    name: 'LoginForm',

    layout: 'fullscreen',
    //
    // middleware: [
    //   'isReadyToUse'
    // ],

    created() {
      // if it have 'isReadyToUse', you must keep going on.
      const isReadyToUse = localStorage.getItem('isReadyToUse');
      localStorage.clear();

      if(isReadyToUse) {
        localStorage.setItem('isReadyToUse', isReadyToUse);
      }
    },

    computed: {
      productName(){
        return process.env.PRODUCT === '4NET' ? 'product-name-4net' : 'product-name-4web';
      }
    },

    data() {
      return {
        error: '',
        // TODO: Remove when finish test
        vmLogin: {
          email: 'admin@mvs.vn',
          password: 'Mvs@123456',
        },
        ruleInline: {
          email: [
            {required: true, message: 'Vui lòng cung cấp tên đăng nhập', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Vui lòng cung cấp mật khẩu', trigger: 'blur'}
          ]
        },
        loading: false
      }
    },
    methods: {
      ...mapMutations(['SET_LOCALE']),

      handleSubmit() {
        this.loading = true;
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.$clientApi.auth.login(this.$axios, {
              email: this.vmLogin.email,
              password: this.vmLogin.password
            })
              .then(res => {
                this.SET_LOCALE(res.data.user.language === 'EN' ? 'en' : 'vi');
                this.initStoreData(res);
              }).catch(error => {
              this.loading = false;
              if (error.response.status === 500) {
                this.error = "Có lỗi khi thực hiện đăng nhập vào thiết bị";
              }else if (error.response.status === 400){
                this.error = "Email hoặc mật khẩu đăng nhập không đúng";
              } else {
                this.error = "Không thể kết nối được đến máy chủ!";
              }
            })
          } else {
            this.$Message.info('Vui lòng làm theo chỉ dẫn màu đỏ!');
            this.loading = false;
          }
        })
      },

      initStoreData(res) {
        this.$store.commit('SET_AUTH', res.data);
        this.$store.commit('SET_AUTH_TO_COOKIE', res.data);
        this.$clientApi.folders.folderDetail(this.$axios, 'root').then(res => {
          this.$store.commit('SET_ROOT', {
            name: res.data.name,
            id: res.data.id
          });
          this.loading = false;
          this.$router.push('/');
        }).catch(() => {
          this.loading = false;
        });
      }
    }
  }
</script>

