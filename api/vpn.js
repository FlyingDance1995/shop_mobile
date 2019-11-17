import utils from "../utils";

const getVpn = ($axios) => {
  return $axios.get('/settings/vpn/configs');
};

const getProviders = ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/settings/vpn/providers' + queryString);
};

const create = ($axios, body) => {
  return $axios.post(`/settings/vpn/providers`, body)
};

const update = ($axios, id, body) => {
  return $axios.put(`/settings/vpn/providers/${id}`, body)
};

const vpn = {
  getVpn,
  getProviders,
  create,
  update
};

export default vpn;
