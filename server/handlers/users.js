const api = require('../api');
const utils = require('../utils');

const query = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.users.query(token, url);
    res.status(200).send(data);
  } catch (e) {
    if(e.code === 'ENETUNREACH'){
      res.status(504).send('Mất kết nối đến server');
    } else {
      const response = e.response;
      res.status(500).send(response.data);
    }
  }
};

const update = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.users.update(token, url, req.body);
    res.status(200).send(data);
  } catch ({response}) {
    // console.error(e);
    res.status(response.data.status_code).send(response.data.error);
  }
};

const add = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    const { data } = await api.users.add(token, url, req.body);
    res.status(200).send(data);
  } catch ({ response }) {
    res.status(response.data.status_code).send(response.data.error);
  }
};




module.exports = {
  query,
  update,
  add,
};
