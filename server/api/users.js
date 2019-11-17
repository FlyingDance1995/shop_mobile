const instance = require('./_instance');

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

const update = (token, path, body) => {
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

const add = (token, path, body) => {
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

module.exports = {
  query,
  update,
  add
};
