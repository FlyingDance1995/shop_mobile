const _ = require('lodash');
const Cookies = require('universal-cookie');

const getUserFromCookie = (req) => {
  if (!req.headers.cookie) return undefined;
  const cookie = new Cookies(req.headers.cookie);
  return cookie.get('user');
};

const getUserFromLocalStorage = () => {
  const json = localStorage.getItem('user');
  return json ? JSON.parse(json) : undefined
};

const getCookies = (payload) => {
  if(payload) return new Cookies(payload);
  else return new Cookies();
};

const getTokenFromCookie = (req) => {
  if (!req.headers.cookie) return undefined;
  const cookie = new Cookies(req.headers.cookie);
  return cookie.get('token');
};

const getQueryStringFromObject = (obj) => {
  const hasNoProps = _.isEmpty(obj);
  if(hasNoProps) return '';
  let queryArray = [];
  for(let key in obj) {
    const value = obj[key];
    queryArray.push(`${key}=${value}`);
  }
  return `?${queryArray.join('&')}`
};



module.exports = {
  getUserFromCookie,
  getUserFromLocalStorage,
  getCookies,
  getTokenFromCookie,
  getQueryStringFromObject,
};


