const iHTTP = require('./_interface');

const create = iHTTP.POST;

const get = iHTTP.GET;

const update = iHTTP.PUT;

const remove = iHTTP.DELETE;

const getTree = iHTTP.GET;

const getStatisticsHistory = iHTTP.GET;

const updateStatus = iHTTP.PUT;

const getStatistics = iHTTP.GET;

const uploadCrawler = iHTTP.UPLOAD;

module.exports = {
  create,
  get,
  update,
  remove,
  getTree,
  getStatisticsHistory,
  updateStatus,
  getStatistics,
  uploadCrawler
};
