import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BootstrapVue } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'

import './app.scss'

Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  // vuetify,
  el: '#app',
  render: h => h(App)
})
