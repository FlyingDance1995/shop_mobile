const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.API_ENDPOINT
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('FORWARD: ', config.url);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = ;

module.exports = instance;
