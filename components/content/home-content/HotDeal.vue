<template>
  <div id="hot-deal" class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="col-md-12">
          <div class="hot-deal">
            <ul class="hot-deal-countdown">
              <li>
                <div>
                  <h3>02</h3>
                  <span>Ngày</span>
                </div>
              </li>
              <li>
                <div>
                  <h3>10</h3>
                  <span>Giờ</span>
                </div>
              </li>
              <li>
                <div>
                  <h3>34</h3>
                  <span>Phút</span>
                </div>
              </li>
              <li>
                <div>
                  <h3>60</h3>
                  <span>Giây</span>
                </div>
              </li>
            </ul>
            <h2 class="text-uppercase">Sản phẩm hot của tuần </h2>
            <p>Sản phẩm mới giảm giá lên tới 50%</p>
            <a class="primary-btn cta-btn" href="#">Mua ngay</a>
          </div>
        </div>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>

<script>
  export default {
    name: 'HotDeal',

    created() {
      this.getHotDeal();
    },

    data() {
      return {
        hotDeal: [],
      }
    },

    methods: {
      getHotDeal() {
        this.hotDeal = [
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
