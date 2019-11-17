const iHTTP = require('./_interface');

const getStatistics = iHTTP.GET;

const getStatisticsHistory = iHTTP.GET;

module.exports = {
  getStatistics,
  getStatisticsHistory,
};
