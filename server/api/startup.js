const iHTTP = require('./_interface');

const queryStarted = iHTTP.GET;

const createFirstUser = iHTTP.POST;

const addLicenseKey = iHTTP.POST;

const getNetworks = iHTTP.GET;

const updateNetwork = iHTTP.PUT;

const testInterface = iHTTP.GET;

module.exports = {
  queryStarted,
  createFirstUser,
  addLicenseKey,
  getNetworks,
  updateNetwork,
  testInterface
};
