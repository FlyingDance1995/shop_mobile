const iHTTP = require('./_interface');

const getEmailServerConfigs = iHTTP.GET;

const changeEmailServerConfigs = iHTTP.PUT;

const getEmailServerTest = iHTTP.GET;

const getEmailEvents = iHTTP.GET;

const addEmail = iHTTP.POST;

const updateEmail = iHTTP.PUT;


module.exports = {
  getEmailServerConfigs,
  changeEmailServerConfigs,
  getEmailServerTest,
  getEmailEvents,
  addEmail,
  updateEmail
};
