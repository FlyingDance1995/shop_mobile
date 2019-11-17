const api = require('../api');
const utils = require('../utils');

const getTargetTasks = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getTargetTasks(token, url,);
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

const getTasks = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getTasks(token, url,);
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

const getTasksDetails = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getTasksDetails(token, url,);
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

const getHosts = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getHosts(token, url,);
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

const getHostInfo = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getHostInfo(token, url,);
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

const getTechnology = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getTechnology(token, url,);
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

const getServices = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getServices(token, url,);
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

const getUrls = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getUrls(token, url,);
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

const getUrlInfo = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getUrlInfo(token, url,);
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

const getStatistics = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.getStatistics(token, url,);
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

const updateData = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.updateData(token, url, req.body);
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

const addNotes = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.tasks.addNotes(token, url, req.body);
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
  getTargetTasks,
  getTasks,
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
