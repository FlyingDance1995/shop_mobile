const api = require('../api');
const utils = require('../utils');

const get = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.profile.get(token, url);
    res.status(200).send(data);
  } catch (e) {
    // console.error(e);
    res.sendStatus(400);
  }
};

const changePassword = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.profile.changePassword(token, url, req.body);
    res.status(200).send(data);
  } catch ({response}) {
    res.status(response.data.status_code).send(response.data.error);
  }
};

const changeInfo = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.profile.changeInfo(token, url, req.body);
    res.status(200).send(data);
  } catch (e) {
    // console.error(e);
    res.sendStatus(400);
  }
};

//bookmarks
const getBookmarks = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.profile.query(token, url);
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

const postBookmarks = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.profile.postBookmarks(token, url, req.body);
    res.status(200).send(data);
  }catch (error) {
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const deleteBookmarks = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.profile.deleteBookmarks(token, url);
    res.status(200).send(data);
  }catch (error) {
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports = {
  get,
  changePassword,
  changeInfo,
  getBookmarks,
  postBookmarks,
  deleteBookmarks
};
