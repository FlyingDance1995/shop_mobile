import utils from "../utils";

const updateFixStatus = ($axios, body) => {
  return $axios.put(`/fix`, body)
};

const fix = {
  updateFixStatus
};

export default fix;
