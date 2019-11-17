const instance = require('./_instance');

const get = (token, path) => {
  const url = `${process.env.API_ENDPOINT}` + path;
  return instance({
    method: 'GET',
    url,
    headers: {
      Authorization: `Token ${token}`
    }
  })
};

const changePassword = (token, path, body) => {
  const url = `${process.env.API_ENDPOINT}` + path;
  return instance({
    method: 'POST',
    url,
    data: body,
    headers: {
      Authorization: `Token ${token}`
    }
  })
};

const changeInfo = (token, path, body) => {
  const url = `${process.env.API_ENDPOINT}` + path;
  return instance({
    method: 'PUT',
    url,
    data: body,
    headers: {
      Authorization: `Token ${token}`
    }
  })
};

//bookmarks
const query = (token, path) => {
  const url = `${process.env.API_ENDPOINT}` + path;
  return instance({
    method: 'GET',
    url,
    headers: {
      Authorization: `Token ${token}`
    }
  })
};

const postBookmarks = (token, path, body) => {
  const url = `${process.env.API_ENDPOINT}` + path;
  return instance({
    method: 'POST',
    url,
    data:body,
    headers: {
      Authorization: `Token ${token}`
    }
  })
};
const deleteBookmarks = (token, path) => {
  console.log('path',path);
  const url = `${process.env.API_ENDPOINT}` + path;
  return instance({
    method: 'DELETE',
    url,
    headers: {
      Authorization: `Token ${token}`
    }
  })
};

module.exports = {
  get,
  changePassword,
  changeInfo,
  query,
  postBookmarks,
  deleteBookmarks
};
