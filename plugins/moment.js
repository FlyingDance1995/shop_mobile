import moment from 'moment';
import Vue from 'vue';

export default (context) => {
  // Set the function directly on the context.app object
  context.$moment = moment
}

Vue.prototype.$moment = moment;

