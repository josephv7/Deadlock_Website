<template>
  <div id="app">
    <section id="menu-0">
    <nav class="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
        <div class="container">

            <div class="mbr-table">
                <div class="mbr-table-cell">

                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-logo"><img src="static/images/untitled-130x128.png" alt="Deadlock"></router-link>
                        <router-link to="/" class="navbar-caption"><img width="30%" src = "static/images/logo.png" /></router-link>
                    </div>

                </div>
                <div class="mbr-table-cell">

                    <button class="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        <div class="hamburger-icon"></div>
                    </button>

                    <ul class="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar"><li class="nav-item"><router-link class="nav-link link" to="/rules">RULES</router-link></li><li class="nav-item dropdown"><router-link class="nav-link link" to="/leaderboard" aria-expanded="false">LEADERBOARD</router-link></li><li class="nav-item dropdown"><a class="nav-link link" href="https://techksetra18.in/" aria-expanded="false" target="_blank">TECHKSHETRA</a></li>
                      <li class="nav-item dropdown"><img class="user-img" v-if="user" :src="user.photoURL"></li></ul>
                    <button hidden="" class="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        <div class="close-icon"></div>
                    </button>

                </div>
            </div>

        </div>
      </nav>
    </section>
    <section class="engine"></section>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
require('firebase/firestore')
export default {
  name: 'App',
  computed: {
    user: function () {
      return firebase.auth().currentUser
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.user-img {
  width:2rem;
  border-radius: 1rem;
}
</style>
