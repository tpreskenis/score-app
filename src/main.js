import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueAwesomeSwiper from './plugins/swiper';

import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueAwesomeSwiper,
  store,
  render: h => h(App)
}).$mount('#app')
