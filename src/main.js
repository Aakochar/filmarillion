import Vue from 'vue';
import router from './router'

import App from './App.vue';

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
