import utils from "../utils";

const query = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/risks` + queryString)
};

const getData = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/riskdata` + queryString)
};

const updateData =  ($axios, body) => {
  return $axios.put(`/riskdata`, body)
};

const addNotes =  ($axios, body) => {
  return $axios.post(`/riskdata/notes`, body)
};

const risks = {
  query,
  getData,
  updateData,
  addNotes
};

export default risks;
