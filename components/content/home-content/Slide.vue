<template>
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div v-if="slideImgs[0].id"
           class="row">
        <no-ssr>
          <swiper :options="swiperOption" ref="mySwiper">
            <div class="swiper-slide" v-for="(img, index) in slideImgs">
              <img :src="img.linkImage" alt="" width="1200" height="300">
            </div>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </no-ssr>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
  export default {
    name: 'Slide',

    created() {
      this.getListSlide();
    },

    mounted(){
      // Products Slick
      $('.products-slick').each(function() {
        let $this = $(this),
          $nav = $this.attr('data-nav');

        $this.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          speed: 300,
          dots: false,
          arrows: true,
          appendArrows: $nav ? $nav : false,
          responsive: [{
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
        });
      });
      // Products Widget Slick
      $('.products-widget-slick').each(function() {
        let $this = $(this),
          $nav = $this.attr('data-nav');

        $this.slick({
          infinite: true,
          autoplay: true,
          speed: 300,
          dots: false,
          arrows: true,
          appendArrows: $nav ? $nav : false,
        });
      });
    },

    data() {
      return {
        slideImgs: [],

        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
        },
      }
    },

    methods: {
      getListSlide() {
        this.slideImgs = [
          {
            "id": 1,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/7/637113025494702289_C1@2x.png"
          },
          {
            "id": 2,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/9/637115045913083349_F-C1_1200x300@2x.jpg"
          },
          {
            "id": 3,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/1/637107584907232570_Banner-A70-C1.png"
          },
          {
            "id": 4,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/1/637107557788435823_C1@2x.png"
          },
          {
            "id": 5,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/1/637107582989504611_A30S-C1.png"
          },
          {
            "id": 6,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/3/637109914985725359_VivoT12-C1.jpg"
          },
          {
            "id": 7,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/9/637114975576491132_F-C1_1200x300@2x.png"
          },
          {
            "id": 8,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/12/1/637107947540066848_C1@2x.png"
          },
          {
            "id": 9,
            "linkImage": "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/25/637102751803394117_Banner-VsmartLive-C1-2X.png"
          },
        ];
        // console.log("this.slideImgs", this.slideImgs);
        // this.$clientApi.slide.getListSlide(this.$axios)
        //   .then(res => {
        //     // this.slideImgs = res.data;
        //     console.log("this.slideImgs", this.slideImgs);
        //   }).catch(err => {
        //   this.$Message.error('Có lỗi xảy ra!', err);
        // });
      },
    }
  }
</script>

<style scoped>
  .swiper-container {
    height: 300px;
    background: #fff;
    color: #ffffff;
  }
  .swiper-wrapper {
    transition-duration: 1000ms !important;
  }
  .swiper-slide {
    text-align: center;
    transition: all 1500ms cubic-bezier(.85,1.54,.97,1.07) !important;
  }
</style>
