import utils from '../utils';

const getStatistics = ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/dashboard/statistics' + queryString);
};

const getStatisticsHistory = ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/dashboard/statistics/history' + queryString);
};

const dashboard = {
  getStatistics,
  getStatisticsHistory,
};

export default dashboard;
