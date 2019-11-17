const api = require('../api');
const utils = require('../utils');

const getListSlide = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('', '');
    const { data } = await api.slide.getListSlide(token, url);
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

module.exports = {
  getListSlide,
};
