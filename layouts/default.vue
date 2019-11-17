<template>
  <div>
    <HomePage/>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';
  import HomePage from '@/components/layouts/HomePage.vue';

  export default {
    // middleware: [
    //   'isReadyToUse',
    //   'requireAuthenticated'
    // ],

    created() {
      window.addEventListener('online', () => {
        this.updateStatus();
      });

      window.addEventListener('offline', () => {
        this.updateStatus();
      });
    },

    components: {
      HomePage,
    },

    mounted() {
      if (this.error) {
        this.$Message.error(this.error.message)
      }
    },

    data() {
      return {}
    },

    computed: mapState(['error', 'locale']),

    watch: {
      locale() {
        this.$router.go(this.$route.fullPath);
      }
    },

    methods: {
      ...mapMutations({
        SET_LOCALE: "SET_LOCALE",
        SET_IS_ONLINE: "SET_IS_ONLINE",
      }),
      updateStatus() {
        let isOnline = navigator.onLine || false;

        if (isOnline) {
          this.SET_IS_ONLINE(true);
          this.$Message.destroy();
          this.$Message.success({
            content: "Đã kết nối lại",
          })
        } else {
          this.SET_IS_ONLINE(false);
          this.$Message.destroy();
          this.$Message.error({
            render: h => {
              return h('div', {
                  class: 'flex-row center middle',
                  style: {
                    height: '24px'
                  }
                },
                [
                  h('span', 'Mất kết nối. Vui lòng thử lại'),
                  h('Icon', {
                    props: {
                      type: 'md-refresh',
                      size: 16
                    },
                    class: 'ml-sm',
                    style: {
                      cursor: 'pointer',
                      paddingTop: '1px'
                    },
                    on: {
                      click: () => {
                        location.reload();
                      }
                    },
                  })
                ])
            },
            duration: 0,
          })
        }
      }
    }
  }
</script>
