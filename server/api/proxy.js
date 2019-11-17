const iHTTP = require('./_interface');

const getProxy = iHTTP.GET;

const addProxy = iHTTP.POST;

const getProxyDetail = iHTTP.GET;

const changeProxy = iHTTP.PUT;

const deleteProxy = iHTTP.DELETE;

const getProxyCurrent = iHTTP.GET;

module.exports = {
  getProxy,
  addProxy,
  getProxyDetail,
  changeProxy,
  deleteProxy,
  getProxyCurrent
};
