const getProductsSell = ($axios) => {
  return $axios.get('/home/get-product/sellMaxLot');
};

const getProductsSellDetail = ($axios, id) => {
  return $axios.get(`/home/get-product/sellMaxLot/${id}`);
};

const getProductsDiscount = ($axios) => {
  return $axios.get('/home/get-product/disscount');
};

const getProductsDiscountDetail = ($axios, id) => {
  return $axios.get(`/home/get-product/disscount/${id}`);
};

const getNewProducts = ($axios) => {
  return $axios.get('/home/get-product/new');
};

const getNewProductsDetail = ($axios, id) => {
  return $axios.get(`/home/get-product/new/${id}`);
};

const getProducts = ($axios) => {
  return $axios.get(`/home/get-product/productDetail`);
};

const getProductsDetail = ($axios, id) => {
  return $axios.get(`/home/get-product/productDetail/${id}`);
};

const products = {
  getProductsSell,
  getProductsSellDetail,
  getProductsDiscount,
  getProductsDiscountDetail,
  getNewProducts,
  getNewProductsDetail,
  getProducts,
  getProductsDetail
};

export default products;
