import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import WeVue from 'we-vue'
import 'lib-flexible/flexible.js'
import 'we-vue/lib/style.css'
Vue.use(WeVue)
var vue=require("vue");
var VueValidator=require("vue-validator");
Vue.use(VueValidator);
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

