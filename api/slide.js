const getListSlide = ($axios) => {
  return $axios.get('/get-banner');
};

const slide = {
  getListSlide,
};

export default slide;
