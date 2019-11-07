<template>
  <div id="app" style="background-color: black;">
    <vue-particles
        color="#c13a48"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#c13a48"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
         style="z-index: 0;">
      </vue-particles>
    <section id="menu-0">

    <nav class="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
        <div class="container">

            <div class="mbr-table">
                <div class="mbr-table-cell">

                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-logo"><img :src="getLogo" alt="Deadlock"></router-link>
                    </div>

                </div>
                <div class="mbr-table-cell">

                    <button class="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        <div class="hamburger-icon"></div>
                    </button>

                    <ul class="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar"><li class="nav-item"><router-link class="nav-link link" to="/rules">RULES</router-link></li><li class="nav-item dropdown"><router-link class="nav-link link" to="/leaderboard" aria-expanded="false">LEADERBOARD</router-link></li><li class="nav-item dropdown"><a class="nav-link link" href="https://www.techkshetra.tech/" aria-expanded="false" target="_blank">TECHKSHETRA</a></li>
                      <li v-if="user" class="nav-item dropdown">
                        <router-link class="nav-link link" to="/user/dashboard" aria-expanded="false">PLAY</router-link>
                        </li>
                      <li class="nav-item dropdown">
                        <a v-if="user" class="nav-link btn btn-white btn-white-outline top-button" v-on:click="logout"><img class="user-img" :src="user.photoURL"> LOG OUT</a>
                        </li>
                      
                      </ul>
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
    <footer class="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-d" style="background-image: url(/static/images/footer.jpg); padding-top: 1.75rem; padding-bottom: 1.75rem;">
    
    <div class="container">
        <p class="text-xs-center">Copyright (c) 2018 Kiran Anto.</p>
    </div>
</footer>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
require('firebase/firestore')
export default {
  name: 'App',
  data: function () {
    return {
      imagepath: '/static/images/d_text.svg'
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser
    },
    ...mapGetters([
      'getLogo'])
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$store.commit('SET_USER', null)
        this.$router.replace('/')
      })
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

#particles-js {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.user-img {
  height: 2.4rem;
  margin-right: 1rem;
  border-radius: 2.5rem;
}

.top-button {
    padding-left: 0rem !important;
    height: 2.5rem;
    border-radius: 2.5rem;
    padding-top: 0rem !important;
    padding-bottom: 0rem !important;
}
</style>
