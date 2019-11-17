const fs = require('fs');
const formidable = require('formidable');
const FormData = require('form-data');
const api = require('../api');
const utils = require('../utils');

const getVpn = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.vpn.getVpn(token, url);
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

const getProviders = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.vpn.getProviders(token, url);
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

const create = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.vpn.create(token,url,req.body);
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

const update = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.vpn.update(token,url,req.body);
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

const uploadVPN = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');

    let form = new formidable.IncomingForm();
    form.maxFileSize = 200 * 1024 * 1024;

    form.parse(req)
      .on('fileBegin', (name, file) => {
        file.path = __dirname + '\\' + file.name;
        console.log('file.path: ', file.path);
      })
      .on('file', async (name, file) => {
        let bodyFormData = new FormData();
        bodyFormData.append('files', fs.createReadStream(file.path));
        try {
          const {data} = await api.vpn.uploadVPN(token, url, bodyFormData, bodyFormData.getHeaders());
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
  getVpn,
  getProviders,
  create,
  update,
  uploadVPN
};
