import utils from "../utils";

const getTasks = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/tasks` + queryString)
};

const getTargetTasks = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks` + queryString)
};

const getTasksDetails = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}` + queryString)
};

const getHosts = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}/hosts` + queryString)
};

const getHostInfo = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}/hosts/${params.hostId}` + queryString)
};

const getTechnology = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}/technology` + queryString)
};

const getServices = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}/hosts/${params.hostId}/services` + queryString)
};

const getUrls = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}/urls` + queryString)
};

const getUrlInfo = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}/urls/${params.urlId}` + queryString)
};

const getStatistics = ($axios, params, query) => {
  const queryString = utils.getQueryStringFromObject(query);
  return $axios.get(`/folders/${params.folderId}/targets/${params.targetId}/tasks/${params.taskId}/statistics` + queryString)
};



const tasks = {
  getTargetTasks,
  getTasks,
  getTasksDetails,
  getHosts,
  getHostInfo,
  getTechnology,
  getServices,
  getUrls,
  getStatistics,
  getUrlInfo,
};

export default tasks;
