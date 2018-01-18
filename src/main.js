// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import { sync } from 'vuex-router-sync'
import store from './store'

import AppView from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

var router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})

/* eslint-disable no-new */
sync(store, router)

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(AppView)
})
