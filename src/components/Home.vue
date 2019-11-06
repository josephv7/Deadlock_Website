<template  >
<div>
<section class="mbr-section mbr-section-hero mbr-section-full mbr-parallax-background mbr-section-with-arrow mbr-after-navbar section-2"  id="header1-1">

    <div class="mbr-table-cell">

        <div class="container">
            <div class="row">
                <div class="mbr-section col-md-10 col-md-offset-1 text-xs-center">

                    <div class="mbr-section-title display-1"><img src = "/static/images/d_text.svg" width="50%"/></div><br>
                    <p class="mbr-section-lead lead">Overclock your brain<br>but never rest, unless you're at the top</p><br>
                    <div class="mbr-section-btn"> </div>
                     <div class="text-center col-md-4 col-sm-offset-4 spacing-logo">
            <!-- login form -->
            <div v-if="!currentUser" class="row">
              <button v-on:click="signin" v-bind:class="'btn g-button btn-lg ' + loading"><img src="https://cdn.rawgit.com/firebase/firebaseui-web/master/image/google.svg" viewBox="0 0 60 55" width="25px" /><span class="goog" >Signin with Google</span></button>
          </div>
          <div v-else class="row">
            <router-link to="/user/dashboard">
              <button v-bind:class="'btn g-button btn-lg ' + loading"><span class="goog" >Play Now </span></button>
                </router-link>
          </div>

            <!-- errors -->
          </div>
                </div>

            </div>
        </div>
    </div>

    <div class="mbr-arrow mbr-arrow-floating" aria-hidden="true"><a href="#footer1-d"><i class="mbr-arrow-icon"></i></a></div>

</section>

<section class="mbr-section-full mbr-parallax-background section-3" id="content5-0">
    <div class="container">
        <h3 class="mbr-section-title display-2" style="color:#C32E45;">Start playing, and think harder !</h3>
        <div class="lead"><p class="display-4" style="color:#ffffff;">An exciting online treasure hunt</p></div>
    </div>
</section>
<section class="mbr-section mbr-section-md-padding mbr-parallax-background section-3  " id="social-buttons2-1">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-xs-center">
                <h3 class="mbr-section-title display-2" style="color: white">FOLLOW US</h3>
                <div> <a class="btn btn-social" title="Facebook" target="_blank" href="https://www.facebook.com/D4Deadlock"><i class="socicon socicon-facebook"></i></a>&nbsp;&nbsp;<a class="btn btn-social" title="Instagram" target="_blank" href="https://www.instagram.com/abhiyanthriki/"><i class="socicon socicon-instagram"></i></a>      </div>
            </div>
        </div>
    </div>
</section>

  <input name="animation" type="hidden">
   <div id="scrollToTop" class="scrollToTop mbr-arrow-up"><a style="text-align: center;"><i class="mbr-arrow-up-icon"></i></a></div>
</div>
</template>
<script>
import firebase from 'firebase'
require('firebase/firestore')
export default {
  name: 'Login',
  data (router) {
    return {
      loading: ''
    }
  },
  computed: {
    currentUser: function () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    signin () {
      var provider = new firebase.auth.GoogleAuthProvider()
      this.toggleLoading()
      this.$store.commit('TOGGLE_LOADING')
      this.toggleLoading()
      /* Making API call to authenticate a user */

      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          this.$router.replace('/user/dashboard')
        }).catch((error) => {
          this.$store.commit('TOGGLE_LOADING')
          console.log(error.message)
          this.toggleLoading()
        })
    },
    toggleLoading () {
      this.loading = (this.loading === '') ? 'loading' : ''
    }
  }
}
</script>

<style>

.section-2 {
   /* position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;  
  background-size: cover;
  padding-bottom: 220px;*/
}
.section-3 {
  background: url('/static/images/13.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; padding-top: 320px; padding-bottom: 220px;
}
.goog {
    margin-left: 1rem;
}

.btn-social {
  font-size: 23px;
  border-radius: 50%;
  padding: 1px;
  width: 44px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: relative;
  border: 2px solid;
  color: #fff; }
  .btn-social i {
    top: 0;
    line-height: 44px;
    width: 44px; }
  .btn-social:hover {
    color: #fff; }
  .btn-social + .btn {
    margin-left: 0.1rem; }
</style>
