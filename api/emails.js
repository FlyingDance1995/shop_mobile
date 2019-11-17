import utils from "../utils";

const getEmailServerConfigs = ($axios) => {
  return $axios.get('/settings/emails/configs');
};

const changeEmailServerConfigs = ($axios, body) => {
  return $axios.put('/settings/emails/configs', body);
};

const getEmailServerTest = ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/settings/emails/test' + queryString);
};

// Email Notification
const getEmailEvents =  ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/settings/emails'+ queryString)
};

const addEmailEvents =  ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.post('/settings/emails'+ queryString)
};

const updateEmailEvents =  ($axios, id, body) => {
  return $axios.put(`/settings/emails/${id}`, body)
};

const emails = {
  getEmailServerConfigs,
  changeEmailServerConfigs,
  getEmailServerTest,
  getEmailEvents,
  addEmailEvents,
  updateEmailEvents
};

export default emails;
