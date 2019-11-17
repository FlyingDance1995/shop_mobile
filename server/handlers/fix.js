const utils = require('../utils');

const updateFixStatus = async (req, res) => {
  try {
    const token = utils.getTokenFromCookie(req);
    const url = req.url.replace('client-api/', '');
    // const { data } = await api.vpn.create(token,url,req.body);
    res.status(200).send({
      status: 'Success123'
    });
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
  updateFixStatus,
};
