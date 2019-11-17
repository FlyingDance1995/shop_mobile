const iHTTP = require('./_interface');

const getVpn = iHTTP.GET;

const getProviders = iHTTP.GET;

const create = iHTTP.POST;

const update = iHTTP.PUT;

const uploadVPN = iHTTP.UPLOAD;

module.exports = {
  getVpn,
  getProviders,
  create,
  update,
  uploadVPN
};
