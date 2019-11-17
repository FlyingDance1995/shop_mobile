import utils from "../utils";

const query = ($axios,query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get('/folders'+ queryString)
};

const getTargets = ($axios, id, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${id}/targets` + queryString)
};

const folderDetail = ($axios, id, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${id}` + queryString)
};

const create = ($axios, body) => {
  return $axios.post(`/folders`,body)
};

const update = ($axios, id, body) => {
  return $axios.put(`/folders/${id}`,body)
};

const deleteFolder = ($axios, id) => {
  return $axios.delete(`/folders/${id}`)
};

const getTree = ($axios, id) => {
  return $axios.get(`/folders/${id}/tree`)
};

const getStatisticsHistory = ($axios, id, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${id}/statistics/history` + queryString)
};

const folders = {
  query,
  folderDetail,
  create,
  update,
  deleteFolder,
  getTargets,
  getTree,
  getStatisticsHistory
};

export default folders;
