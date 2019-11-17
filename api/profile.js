import utils from "../utils";

const get = ($axios) => {
  return $axios.get('/profile');
};

const changePassword = ($axios, body) => {
  return $axios.post('/profile/change_password', body);
};

const changeInfo = ($axios, body) => {
  return $axios.put('/profile', body);
};

//bookmarks
const queryBookmarks = ($axios) => {
  return $axios.get('/profile/bookmarks')
};

const postBookmarks = ($axios,body) => {
  return $axios.post('/profile/bookmarks',body)
};

const deleteBookmarks = ($axios,id) => {
  return $axios.delete('/profile/bookmarks/'+id)
};

const profile = {
  get,
  changePassword,
  changeInfo,
  queryBookmarks,
  postBookmarks,
  deleteBookmarks
};

export default profile;
