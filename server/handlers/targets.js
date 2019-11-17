const fs = require('fs');
const formidable = require('formidable');
const FormData = require('form-data');
const api = require('../api');
const utils = require('../utils');

const create = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const {data} = await api.targets.create(token, url, req.body);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const get = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const {data} = await api.targets.get(token, url, req.body);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const update = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const {data} = await api.targets.update(token, url, req.body);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const remove = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const {data} = await api.targets.remove(token, url);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const getTree = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const {data} = await api.targets.getTree(token, url);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
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
    const {data} = await api.targets.getTree(token, url);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const getStatisticsHistory = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const {data} = await api.targets.getStatisticsHistory(token, url);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const updateStatus = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const {data} = await api.targets.updateStatus(token, url, req.body);
    res.status(200).send(data);
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

const uploadCrawler = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');

    let form = new formidable.IncomingForm();
    form.maxFileSize = 200 * 1024 * 1024;

    form.parse(req)
      .on('fileBegin', (name, file) => {
        file.path = __dirname + '\\' + file.name;
      })
      .on('file', async (name, file) => {
        let bodyFormData = new FormData();
        bodyFormData.append('file', fs.createReadStream(file.path), {
          header: {'Content-Type': 'multipart/form-data'}
        });
        try {
          const {data} = await api.targets.uploadCrawler(token, url, bodyFormData, bodyFormData.getHeaders());
          fs.unlinkSync(file.path);
          res.status(200).send(data);
        } catch (error) {
          const response = error.response;
          if (response && response.data && response.data.status_code) {
            res.status(response.data.status_code).send(response.data.error);
          } else {
            res.sendStatus(500);
          }
        }
      })
  } catch (error) {
    const response = error.response;
    if (response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

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
