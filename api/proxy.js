import utils from "../utils";

const getProxy = ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/settings/proxy' + queryString);
};

const addProxy = ($axios, body) => {
  return $axios.post('/settings/proxy', body);
};

const getProxyDetail = ($axios, id) => {
  return $axios.get(`/settings/proxy/${id}`);
};

const changeProxy = ($axios, id, body) => {
  return $axios.put(`/settings/proxy/${id}`, body);
};

const deleteProxy = ($axios, id) => {
  return $axios.delete(`/settings/proxy/${id}`);
};

const getProxyCurrent = ($axios) => {
  return $axios.get('/settings/proxy/current');
};

const proxy = {
  getProxy,
  addProxy,
  getProxyDetail,
  changeProxy,
  deleteProxy,
  getProxyCurrent
};

export default proxy;
