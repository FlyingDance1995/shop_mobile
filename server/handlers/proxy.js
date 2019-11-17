const api = require('../api');
const utils = require('../utils');

const getProxy = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.proxy.getProxy(token, url);
    res.status(200).send(data);
  } catch (error) {
    console.log("error: ", error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const addProxy = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.proxy.addProxy(token, url, req.body);
    res.status(200).send(data);
  } catch (error) {
    console.log("error: ", error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const getProxyDetail = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.proxy.getProxyDetail(token, url);
    res.status(200).send(data);
  } catch (error) {
    console.log("error: ", error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const changeProxy = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.proxy.changeProxy(token, url, req.body);
    res.status(200).send(data);
  } catch (error) {
    console.log("error: ", error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const deleteProxy = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.proxy.deleteProxy(token, url);
    res.status(200).send(data);
  } catch (error) {
    console.log("error: ", error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const getProxyCurrent = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.proxy.getProxyCurrent(token, url);
    res.status(200).send(data);
  } catch (error) {
    console.log("error: ", error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports = {
  getProxy,
  addProxy,
  getProxyDetail,
  changeProxy,
  deleteProxy,
  getProxyCurrent
};
