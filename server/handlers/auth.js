const api = require('../api');
const utils = require('../utils');

const login = async (req, res) => {
  try {
    const url = req.url.replace('client-api/', '');
    const { data } = await api.auth.login(undefined, url, req.body);
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

const logout = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    await api.auth.logout(token, url, undefined);
    res.sendStatus(200);
  } catch (error) {
    console.log('error: ', error);
    const response = error.response;
    if(response && response.data && response.data.status_code) {
      res.status(response.data.status_code).send(response.data.error);
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports = {
  login,
  logout
};
