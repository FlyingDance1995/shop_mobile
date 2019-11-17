const getLicenses = ($axios) => {
  return $axios.get('/systems/licenses');
};

const changeLicenses = ($axios, body) => {
  return $axios.put('/systems/licenses', body);
};

const licenses = {
  getLicenses,
  changeLicenses
};

export default licenses;
