<template>
  <div>
    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div v-if="slideImgs[0].id"
               class="row">
          <no-ssr>
            <swiper :options="swiperOption" ref="mySwiper">
              <div class="swiper-slide" v-for="(img, index) in slideImgs">
                <img :src="img.linkImage" alt="" width="800" height="300">
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
    <!-- /SECTION -->

    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">

          <!-- section title -->
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="title">Sản phẩm mới</h3>
              <div class="section-nav">
                <ul class="section-tab-nav tab-nav">
                  <li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                  <li><a data-toggle="tab" href="#tab1">Điện thoại</a></li>
                  <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                  <li><a data-toggle="tab" href="#tab1">Phụ kiện</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /section title -->

          <!-- Products tab & slick -->
          <div class="col-md-12">
            <div class="row">
              <div class="products-tabs">
                <!-- tab -->
                <div id="tab1" class="tab-pane active">
                  <div class="products-slick" data-nav="#slick-nav-1">
                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product01.png" alt="">
                        <div class="product-label">
                          <span class="sale">-30%</span>
                          <span class="new">MỚI</span>
                        </div>
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches (Nhập khẩu)</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product02.png" alt="">
                        <div class="product-label">
                          <span class="new">MỚI</span>
                        </div>
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product03.png" alt="">
                        <div class="product-label">
                          <span class="sale">-30%</span>
                        </div>
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product04.png" alt="">
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product05.png" alt="">
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->
                  </div>
                  <div id="slick-nav-1" class="products-slick-nav"></div>
                </div>
                <!-- /tab -->
              </div>
            </div>
          </div>
          <!-- Products tab & slick -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /SECTION -->

    <!-- HOT DEAL SECTION -->
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
    <!-- /HOT DEAL SECTION -->

    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">

          <!-- section title -->
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="title">Bán chạy nhất</h3>
              <div class="section-nav">
                <ul class="section-tab-nav tab-nav">
                  <li class="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
                  <li><a data-toggle="tab" href="#tab2">Điện thoại</a></li>
                  <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
                  <li><a data-toggle="tab" href="#tab2">Phụ kiện</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- /section title -->

          <!-- Products tab & slick -->
          <div class="col-md-12">
            <div class="row">
              <div class="products-tabs">
                <!-- tab -->
                <div id="tab2" class="tab-pane fade in active">
                  <div class="products-slick" data-nav="#slick-nav-2">
                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product06.png" alt="">
                        <div class="product-label">
                          <span class="sale">-30%</span>
                          <span class="new">MỚI</span>
                        </div>
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product07.png" alt="">
                        <div class="product-label">
                          <span class="new">MỚI</span>
                        </div>
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product08.png" alt="">
                        <div class="product-label">
                          <span class="sale">-30%</span>
                        </div>
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product09.png" alt="">
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->

                    <!-- product -->
                    <div class="product">
                      <div class="product-img">
                        <img src="@/assets/images/product01.png" alt="">
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                        <h4 class="product-price">$980.00
                          <del class="product-old-price">$990.00</del>
                        </h4>
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <div class="product-btns">
                          <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                            class="tooltipp">Yêu thích</span></button>
                          <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                            class="tooltipp">So sánh</span></button>
                          <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">Xem chi tiết</span>
                          </button>
                        </div>
                      </div>
                      <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                    <!-- /product -->
                  </div>
                  <div id="slick-nav-2" class="products-slick-nav"></div>
                </div>
                <!-- /tab -->
              </div>
            </div>
          </div>
          <!-- /Products tab & slick -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /SECTION -->

    <!-- SECTION -->
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <div class="col-md-4 col-xs-6">
            <div class="section-title">
              <h4 class="title">Sản phẩm bán chạy</h4>
              <div class="section-nav">
                <div id="slick-nav-3" class="products-slick-nav"></div>
              </div>
            </div>

            <div class="products-widget-slick" data-nav="#slick-nav-3">
              <div>
                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product07.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product08.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product09.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- product widget -->
              </div>

              <div>
                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product01.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product02.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product03.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- product widget -->
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xs-6">
            <div class="section-title">
              <h4 class="title">Sản phẩm bán chạy</h4>
              <div class="section-nav">
                <div id="slick-nav-4" class="products-slick-nav"></div>
              </div>
            </div>

            <div class="products-widget-slick" data-nav="#slick-nav-4">
              <div>
                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product04.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product05.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product06.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- product widget -->
              </div>

              <div>
                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product07.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product08.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product09.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- product widget -->
              </div>
            </div>
          </div>

          <div class="clearfix visible-sm visible-xs"></div>

          <div class="col-md-4 col-xs-6">
            <div class="section-title">
              <h4 class="title">Sản phẩm bán chạy</h4>
              <div class="section-nav">
                <div id="slick-nav-5" class="products-slick-nav"></div>
              </div>
            </div>

            <div class="products-widget-slick" data-nav="#slick-nav-5">
              <div>
                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product01.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product02.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product03.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- product widget -->
              </div>

              <div>
                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product04.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product05.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- /product widget -->

                <!-- product widget -->
                <div class="product-widget">
                  <div class="product-img">
                    <img src="@/assets/images/product06.png" alt="">
                  </div>
                  <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">Laptop Dell Inspiron 5570 15.6 inches</a></h3>
                    <h4 class="product-price">$980.00
                      <del class="product-old-price">$990.00</del>
                    </h4>
                  </div>
                </div>
                <!-- product widget -->
              </div>
            </div>
          </div>

        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /SECTION -->
  </div>
</template>

<script>
  export default {
    name: 'HomeContent',
    components: {

    },

    props: {
    },

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
        swiperSlides: ['h1-slider-2-background-img.jpg', 'h1-slider-3-background-img.jpg']
      }
    },

    methods: {
      getListSlide() {
        this.slideImgs = [
          {
            "id": 1,
            "linkImage": "https://cdn.tgdd.vn/2019/11/banner/thang-oppo-800-300-800x300-(1).png"
          },
          {
            "id": 2,
            "linkImage": "https://cdn.tgdd.vn/2019/11/banner/thu-cu-note10-800-300-800x300-(3).png"
          },
          {
            "id": 3,
            "linkImage": "https://cdn.tgdd.vn/2019/11/banner/800-300-800x300-(13).png"
          },
          {
            "id": 4,
            "linkImage": "https://cdn.tgdd.vn/2019/10/banner/800-300-800x300-(27).png"
          }
        ];
        console.log("this.slideImgs", this.slideImgs);
        this.$clientApi.slide.getListSlide(this.$axios)
          .then(res => {
            // this.slideImgs = res.data;
            console.log("this.slideImgs", this.slideImgs);
          }).catch(err => {
          this.$Message.error('Có lỗi xảy ra!', err);
        });
      },
    }
  }
</script>

<style>
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



