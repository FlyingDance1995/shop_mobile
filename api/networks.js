import utils from "../utils";

const getNetworkTest = ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/settings/network/test' + queryString);
};

const getNetworkConfigs = ($axios) => {
  return $axios.get('/settings/network/configs');
};

const changeNetworkConfigs = ($axios, body) => {
  return $axios.put('/settings/network/configs', body);
};

const getNetworkInterfaces = ($axios) => {
  return $axios.get('/settings/network/interfaces');
};

const changeNetworkInterfaces = ($axios, id , body) => {
  return $axios.put(`/settings/network/interfaces/${id}`, body);
};

const networks = {
  getNetworkTest,
  getNetworkConfigs,
  changeNetworkConfigs,
  getNetworkInterfaces,
  changeNetworkInterfaces
};

export default networks;
