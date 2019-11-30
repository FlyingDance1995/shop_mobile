<template>
  <div>
    <!-- NAVIGATION -->
    <nav id="navigation">
      <!-- container -->
      <div class="container">
        <!-- responsive-nav -->
        <div id="responsive-nav">
          <!-- NAV -->
          <ul class="main-nav nav navbar-nav">
            <li v-for="(item, index) in listMenuMain"
                :class="$route.name === item.params ? 'active' : ''">
              <nuxt-link :to="`${item.params}`">
                {{item.categoryName}}
              </nuxt-link>
            </li>
          </ul>
          <!-- /NAV -->
        </div>
        <!-- /responsive-nav -->
      </div>
      <!-- /container -->
    </nav>
    <!-- /NAVIGATION -->
  </div>
</template>

<script>
  export default {
    name: 'Navigation',

    components: {

    },

    props: {
    },

    created() {
      this.getMenuMain();
    },

    data() {
      return {
        listMenuMain: [],
      }
    },

    methods: {
      getMenuMain() {
        this.listMenuMain = [
          {
            "id": 0,
            "params": 'home',
            "categoryName": "Trang chủ"
          },
          {
            "id": 1,
            "params": 'phones',
            "categoryName": "Điên thoại"
          },
          {
            "id": 2,
            "params": 'laptops',
            "categoryName": "Máy tính"
          },
          {
            "id": 3,
            "params": 'cameras',
            "categoryName": "Máy ảnh"
          }
        ];
        console.log("this.listMenuMain", this.listMenuMain);
        // this.$clientApi.slide.getListSlide(this.$axios)
        //   .then(res => {
        //     // this.listMenuMain = res.data;
        //     console.log("this.listMenuMain", this.listMenuMain);
        //   }).catch(err => {
        //   this.$Message.error('Có lỗi xảy ra!', err);
        // });
      }
    }
  }
</script>

