import Vue from 'vue'
const EventBus = new Vue();

export default (context) => {
  // Set the function directly on the context.app object
  context.$eventBus = EventBus
}

Vue.prototype.$eventBus = EventBus;
