// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import { sync } from 'vuex-router-sync'
import store from './store'
import AppView from './App.vue'

import firebase from 'firebase'
require('firebase/firestore')



Vue.config.productionTip = false

Vue.use(VueRouter)

firebase.initializeApp(store.getters.getFirebaseConfig)

 // eslint-disable-next-line
var db = firebase.firestore()

let app

var router = new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  if (!store.getters.getUser && currentUser) {
    currentUser.isAdmin = false
    store.commit('SET_USER', currentUser)
  }
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // let details = to.matched.some(record => record.meta.details)
  // let requireAdmin = to.matched.some(record => record.meta.requireAdmin)
  // console.log(to.fullPath)
  if (requiresAuth && !currentUser) {
    next({
      path: '/',
      query: {redirect: to.fullPath}
    })
  } else if (currentUser) {
    firebase.firestore().collection('users').doc(currentUser.uid).get()
    .then((doc) => {
      if (doc.exists) {
        store.commit('SET_CURRENT_HASH', doc.data().currentHash)
        store.commit('SET_PREVIOUS_HASH', doc.data().previousHash)
        if (to.fullPath === '/user/enterdetails') {
          next({
            path: '/user/dashboard'
          })
        } else {
          next()
        }
      } else {
        next({
          path: '/user/enterdetails',
          query: {redirect: to.fullPath}
        })
      }
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
sync(store, router)

// Start out app!
// eslint-disable-next-line no-new
firebase.auth().onAuthStateChanged(
  function (user) {
    if (!app) {
      app = new Vue({
        el: '#root',
        router,
        store,
        render: h => h(AppView)
      })
    }
  })
