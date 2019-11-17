const api = require('../api');
const utils = require('../utils');

const getStatistics = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.dashboard.getStatistics(token, url);
    res.status(200).send(data);
  } catch (e) {
    res.sendStatus(400);
  }
};

const getStatisticsHistory = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.dashboard.getStatisticsHistory(token, url);
    res.status(200).send(data);
  } catch (e) {
    res.sendStatus(400);
  }
};

module.exports = {
  getStatistics,
  getStatisticsHistory,
};
