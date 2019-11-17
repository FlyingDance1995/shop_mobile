const iHTTP = require('./_interface');

const getLicenses = iHTTP.GET;

const changeLicenses = iHTTP.PUT;

module.exports = {
  getLicenses,
  changeLicenses
};
