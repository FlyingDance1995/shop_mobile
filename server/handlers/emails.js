const api = require('../api');
const utils = require('../utils');

const getEmailServerConfigs = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.emails.getEmailServerConfigs(token, url);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const getEmailServerTest = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.emails.getEmailServerTest(token, url);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const changeEmailServerConfigs = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.emails.changeEmailServerConfigs(token, url, req.body);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};


const getEmailEvents = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.emails.getEmailEvents(token, url);
    res.status(200).send(data);
  } catch (e) {
    // console.error(e);
    res.sendStatus(400);
  }
};

const addEmailEvents = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.emails.addEmail(token, url,req.body);
    res.status(200).send(data);
  } catch (e) {
    // console.error(e);
    res.sendStatus(400);
  }
};

const updateEmailEvents = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.emails.updateEmail(token, url,req.body);
    res.status(200).send(data);
  } catch (e) {
    // console.error(e);
    res.sendStatus(400);
  }
};

module.exports = {
  getEmailServerConfigs,
  changeEmailServerConfigs,
  getEmailServerTest,
  getEmailEvents,
  addEmailEvents,
  updateEmailEvents
};
