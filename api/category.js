const getCategory = ($axios) => {
  return $axios.get('/get-category');
};

const category = {
  getCategory,
};

export default category;
