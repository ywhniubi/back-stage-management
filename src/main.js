// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import httpRequest from "../src/axios/htttpRequest"
Vue.config.productionTip = false
Vue.prototype.$http = httpRequest // ajax请求方法 挂载到全局 通过this.$http就要可以使用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
