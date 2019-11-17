import utils from "../utils";

const queryStarted = ($axios) => {
  return $axios.get('/systems/started')
};

const createFirstUser =  ($axios, body) => {
  return $axios.post('/systems/started/users', body)
};

const addLicenseKey =  ($axios, body) => {
  return $axios.post('/systems/started/license', body)
};

const getNetworks =  ($axios) => {
  return $axios.get('/systems/started/networks')
};

const updateNetwork =  ($axios, body) => {
  return $axios.put('/systems/started/networks', body)
};

const testInterface =  ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/settings/network/test' + queryString)
};

const startup = {
  queryStarted,
  createFirstUser,
  addLicenseKey,
  getNetworks,
  updateNetwork,
  testInterface
};

export default startup;
