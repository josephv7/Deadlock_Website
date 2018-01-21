<template >
<div>
<section class="mbr-section mbr-section-hero mbr-section-full mbr-parallax-background mbr-section-with-arrow mbr-after-navbar section-2" id="header1-1">

    <div class="mbr-table-cell">

        <div class="container">
            <div class="row">
                <div class="mbr-section col-md-10 col-md-offset-1 text-xs-center">

                    <div class="mbr-section-title display-1"><img src = "/static/images/logo.png" width="50%"/></div><br>
                    <p class="mbr-section-lead lead">Overclock your brain<br>but never rest, unless you're at the top</p><br>
                    <div class="mbr-section-btn"> </div>
                     <div class="text-center col-md-4 col-sm-offset-4 spacing-logo">
            <!-- login form -->
            <div class="row">
              <button v-on:click="signin" v-bind:class="'btn g-button btn-lg ' + loading"><img src="https://cdn.rawgit.com/firebase/firebaseui-web/master/image/google.svg" viewBox="0 0 60 55" width="25px" /><span class="goog" >Signin with Google</span></button>
          </div>

            <!-- errors -->
            <div v-if=response class="text-red"><p>{{value}}</p></div>
          </div>
                </div>

            </div>
        </div>
    </div>

    <div class="mbr-arrow mbr-arrow-floating" aria-hidden="true"><a href="#footer1-d"><i class="mbr-arrow-icon"></i></a></div>

</section>

<section class="mbr-section-full mbr-parallax-background section-3" id="content5-0">
    <div class="container">
        <h3 class="mbr-section-title display-2" style="color:#00964d;">Start playing, and think harder !</h3>
        <div class="lead"><p class="display-4" style="color:#ffffff;">An exciting online treasure hunt</p></div>
    </div>
</section>
<section class="mbr-section mbr-section-md-padding mbr-parallax-background section-2 " id="social-buttons2-1">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-xs-center">
                <h3 class="mbr-section-title display-2" style="color: white">FOLLOW US</h3>
                <div> <a class="btn btn-social" title="Facebook" target="_blank" href="https://www.facebook.com/D4Deadlock"><i class="socicon socicon-facebook"></i></a>&nbsp;&nbsp;<a class="btn btn-social" title="Instagram" target="_blank" href="https://www.instagram.com/a3k_2017"><i class="socicon socicon-instagram"></i></a>      </div>
            </div>
        </div>
    </div>
</section>
<footer class="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-d" style="background-image: url('/static/images/footer.jpg'); padding-top: 1.75rem; padding-bottom: 1.75rem;">
    <div class="container">
        <p class="text-xs-center">Copyright (c) 2017 Razorsharp.</p>
    </div>
</footer>

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
      loading: '',
      response: ''
    }
  },
  methods: {
    signin () {
      var provider = new firebase.auth.GoogleAuthProvider()
      this.toggleLoading()
      this.resetResponse()
      this.$store.commit('TOGGLE_LOADING')
      this.toggleLoading()
      /* Making API call to authenticate a user */

      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = result.credential.accessToken
          // The signed-in user info.
          console.log('user logged in')
          this.$router.replace('/user/dashboard')
          // firebase.firestore().doc(`users/${result.user.uid}`).get()
          // .then((doc) => {
          //   var user = result.user
          //   if (doc.exists) {
          //     user.isAdmin = doc.data().isAdmin
          //     this.$store.commit('SET_USER', user)
          //     if (doc.data().isAdmin) {
          //       this.$router.push('/admin')
          //     } else {
          //       this.$router.push('/dashboard')
          //     }
          //   } else {
          //     user.isAdmin = false
          //     this.$store.commit('SET_USER', user)
          //     this.$router.push('/dashboard')
          //   }
          // })
          // ...
        }).catch((error) => {
            // Handle Errors here.
          this.$store.commit('TOGGLE_LOADING')
          console.log(error.message)
          this.response = error.message
          this.toggleLoading()
            // ...
        })
    },
    toggleLoading () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse () {
      this.response = ''
    }
  }
}
</script>

<style>
.section-2 {
  background: url('/static/images/jumbotron.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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
  font-size: 20px;
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
