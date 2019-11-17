import appConfig from '../app-config';
import Vue from 'vue';

export default (context) => {
  // Set the function directly on the context.app object
  context.$appConfig = appConfig
}

Vue.prototype.$appConfig = appConfig;

