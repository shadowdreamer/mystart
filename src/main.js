// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import filters from './filters'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Object.keys(filters).forEach(key=>{Vue.filter(key,filters[key])})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
})
