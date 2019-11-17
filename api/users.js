import utils from '../utils';

const query = ($axios, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/users' + queryString);
};

const update = ($axios, id, body) => {
  return $axios.put(`/users/${id}`, body)
};

const add = ($axios, body) => {
  return $axios.post(`/users`, body)
};

const users = {
  query,
  update,
  add
};

export default users;
