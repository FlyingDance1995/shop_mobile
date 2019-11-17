import api from '../api';
import Vue from 'vue';

export default (context) => {
  // Set the function directly on the context.app object
  context.$clientApi = api
}

Vue.prototype.$clientApi = api;

