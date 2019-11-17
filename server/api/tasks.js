const iHTTP = require('./_interface');

const getTasks = iHTTP.GET;

const getTargetTasks = iHTTP.GET;

const getTasksDetails = iHTTP.GET;

const getHosts = iHTTP.GET;

const getHostInfo = iHTTP.GET;

const getTechnology = iHTTP.GET;

const getServices = iHTTP.GET;

const getUrls = iHTTP.GET;

const getUrlInfo = iHTTP.GET;

const getStatistics = iHTTP.GET;

const updateData = iHTTP.PUT;

const addNotes = iHTTP.POST;

module.exports = {
  getTasks,
  getTargetTasks,
  getTasksDetails,
  getHosts,
  getHostInfo,
  getTechnology,
  getServices,
  getUrls,
  getStatistics,
  getUrlInfo,
  updateData,
  addNotes
};
