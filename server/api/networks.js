const iHTTP = require('./_interface');

const getNetworkTest = iHTTP.GET;

const getNetworkConfigs = iHTTP.GET;

const changeNetworkConfigs = iHTTP.PUT;

const getNetworkInterfaces = iHTTP.GET;

const changeNetworkInterfaces = iHTTP.PUT;

module.exports = {
  getNetworkTest,
  getNetworkConfigs,
  changeNetworkConfigs,
  getNetworkInterfaces,
  changeNetworkInterfaces
};
