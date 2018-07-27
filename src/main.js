// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import store from './store/index'


window.Bus=new Vue;

window.axios=axios
window.token= localStorage.getItem('token');

axios.defaults.baseURL = 'http://api-passport.test/api';
axios.defaults.headers.common['Authorization'] = 'Bearer '+window.token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
//Vue.use(axios)
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   store,
  components: { App },
  template: '<App/>'
})
