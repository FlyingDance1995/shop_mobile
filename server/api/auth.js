const iHTTP = require('./_interface');

const login = iHTTP.POST;

const logout = iHTTP.POST;

module.exports = {
  login,
  logout,
};
