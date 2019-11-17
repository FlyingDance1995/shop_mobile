import _ from 'lodash';
import Cookies from 'universal-cookie';
import {Base64} from 'js-base64';

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
  if (payload) return new Cookies(payload);
  else return new Cookies();
};

const getTokenFromCookie = (req) => {
  if (!req.headers.cookie) return undefined;
  const cookie = new Cookies(req.headers.cookie);
  return cookie.get('token');
};

const removeAllCookies = () => {
  const cookie = new Cookies();
  cookie.remove('user', {expires: new Date()});
  cookie.remove('token', {expires: new Date()});
};

const getQueryStringFromObject = (obj) => {
  const hasNoProps = _.isEmpty(obj);
  if (hasNoProps) return '';
  let queryArray = [];
  for (let key in obj) {
    const value = obj[key];
    queryArray.push(`${key}=${value}`);
  }
  return `?${queryArray.join('&')}`
};

const convertErrorToObject = (errArr) => {
  let retObj = {};
  errArr.forEach(str => {
    const key = str.split(' :')[0];
    retObj[key] = str.split(' :')[1];
  });
  return retObj;
};

const hashPassword = (password) => {
  return Base64.encode(password);
};

const isNumber = (value) => {
  return /^\d+$/.test(value)
};

const isValidParamsFolder = (id) => {
  return isNumber(id) || id === 'root';
};

const camelcase2Underscore = (str) => {
  return str.split(/(?=[A-Z])/).join('_').toLowerCase();
};


const utils = {
  getUserFromCookie,
  getUserFromLocalStorage,
  getCookies,
  removeAllCookies,
  getTokenFromCookie,
  getQueryStringFromObject,
  convertErrorToObject,
  hashPassword,
  isValidParamsFolder,
  isNumber,
  camelcase2Underscore
};

export default utils;
