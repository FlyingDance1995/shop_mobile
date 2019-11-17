import utils from "../utils";

const create = ($axios, params, body) => {
  return $axios.post(`/folders/${params.folderId}/targets`, body)
};

const get = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}` + queryString)
};

const update = ($axios, params, body) => {
  return $axios.put(`/folders/${params.folderId}/targets/${params.targetId}`, body)
};

const remove = ($axios, params) => {
  return $axios.delete(`/folders/${params.folderId}/targets/${params.targetId}`)
};

const getTree = ($axios, params) => {
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tree`)
};

const getStatistics = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/statistics` + queryString)
};

const getStatisticsHistory = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/statistics/history` + queryString)
};


const updateStatus = ($axios, params, body) => {
  return $axios.put(`/folders/${params.folderId}/targets/${params.targetId}/status`, body)
};



const targets = {
  create,
  get,
  update,
  remove,
  getTree,
  getStatisticsHistory,
  updateStatus,
  getStatistics
};

export default targets;
