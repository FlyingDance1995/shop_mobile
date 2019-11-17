const instance = require('./_instance');

const iHTTP = {
  GET: (token, path) => {
    const url = `${process.env.API_ENDPOINT}` + path;
    return instance({
      method: 'GET',
      url,
      headers: token ? {
        Authorization: `Token ${token}`
      } : {}
    })
  },

  POST: (token, path, body) => {
    const url = `${process.env.API_ENDPOINT}` + path;
    return instance({
      method: 'POST',
      data: body,
      url,
      headers: token ? {
        Authorization: `Token ${token}`
      } : {}
    })
  },

  PUT: (token, path, body) => {
    const url = `${process.env.API_ENDPOINT}` + path;
    return instance({
      method: 'PUT',
      data: body,
      url,
      headers: token ? {
        Authorization: `Token ${token}`
      } : {}
    })
  },

  DELETE: (token, path) => {
    const url = `${process.env.API_ENDPOINT}` + path;
    return instance({
      method: 'DELETE',
      url,
      headers: token ? {
        Authorization: `Token ${token}`
      } : {}
    })
  },

  UPLOAD: (token, path, body, headers) => {
    const url = `${process.env.API_ENDPOINT}` + path;
    return instance({
      method: 'POST',
      data: body,
      url,
      headers: token ? {
        Authorization: `Token ${token}`,
        ...headers
      } : {
        ...headers
      }
    })
  },
};

module.exports = iHTTP;


