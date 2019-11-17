const iHTTP = require('./_interface');

const query = iHTTP.GET;

const getTargets = iHTTP.GET;

const folderDetail = iHTTP.GET;

const create = iHTTP.POST;

const update = iHTTP.PUT;

const deleteFolder = iHTTP.DELETE;

const getTree = iHTTP.GET;

const getStatisticsHistory = iHTTP.GET;

module.exports = {
  query,
  folderDetail,
  create,
  update,
  deleteFolder,
  getTargets,
  getTree,
  getStatisticsHistory
};

