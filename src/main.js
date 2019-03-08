import Vue, { jsonp } from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import axios from 'axios'
import  qs from 'qs'
import st from './assets/js/style.js'
import $ from 'jquery'
import vant from 'vant'
import  VueJsonp  from  'vue-jsonp'

Vue.use(VueJsonp)

Vue.prototype.$qs = qs
Vue.prototype.$axios=axios
// Vue.prototype.$jsonp=VueJsonp
Vue.use(Router);
Vue.use(Resource)
Vue.use(vant)
import 'vant/lib/index.css';


import router from "./router/router.js"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
