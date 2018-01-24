<template>
  <div style="background-color: black;">
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
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        style="height:30rem;"
         >
      </vue-particles>
  <section class="mbr-section article mbr-parallax-background mbr-after-navbar" id="msg-box8-8" style="position: absolute; top:10%; right:32%;">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-xs-center">
                <h3 class="mbr-section-title display-2">Overclock your Brain</h3>
                <div class="lead"><p></p></div>
 </div>
        </div>
    </div>
</section> 

<section class="mbr-section" id="msg-box5-h" style="background-color: rgb(255, 255, 255); padding-top: 25px; padding-bottom: 120px;">

    <div class="container" style=" padding-bottom: 70px;"><div class="row">
        <span class="mbr-section-title col-md-offset-1 col-xs-offset-1 col-md-6 col-xs-11 col-sm-8" style=" font-size: 2.7rem;
  font-weight: 600;     font-family: 'Montserrat', sans-serif;
  letter-spacing: -1px; ">Your  Rank is :</span>
  <span class="mbr-section-title col-md-1 text-xs-center col-xs-12 col-sm-2" style=" font-size: 3rem;
  font-weight: 700; 
  font-family: 'Montserrat'
  sans-serif; color: '#c13a48';
  letter-spacing: -1px;">{{rank}}
</span></div></div>
 
    <div v-if="!question.photoURL" class="container" style=" padding-bottom: 70px; " >
    <div class="row">

            <div class="mbr-table-md-up">
        <span class="mbr-section-title col-md-offset-1 col-xs-offset-1 col-md-6 col-xs-11 col-sm-8" style=" font-size: 2rem;
  font-weight: 600;     font-family: 'Montserrat', sans-serif;
  letter-spacing: -1px; "> More Questions coming soon...</span></div></div>
  <br>
  <div class="mbr-table-cell mbr-right-padding-md-up mbr-valign-top col-md-5 image-size" style="width: 50%;">
                  <div class="mbr-figure"><img src="/static/images/meme1.jpg" class="img-rounded" alt=" Image appears here "></div>
              </div>
              </div>
  <div v-else class="container">
        <div class="row">
            <div class="mbr-table-md-up">

              <div  class="mbr-table-cell mbr-right-padding-md-up mbr-valign-top col-md-7 image-size" style="width: 50%;">
                  <div class="mbr-figure"><img :src="question.photoURL" class="img-rounded myImg" alt=" Image appears here "></div>
              </div>

         


              <div class="mbr-table-cell col-md-5 text-xs-center text-md-left content-size" id= "closestdiv">
                  <h3 class="mbr-section-title display-2" style="font-size: 2rem;">THINK FOR AN ANSWER</h3>
                  <div class="lead">
<p>
                  <input class ="form-control" type="text" v-model="answer" id="anstxt"></p>

                  </div>

                  <div><button id="buttonsubmit" type="button" v-on:click="calchas" class="btn btn-lg btn-info"> Submit Answer</button></div>
              </div>             

            </div>
        </div>
    </div>
</section></div>
</template>

<script>
import swal from 'sweetalert'
import firebase from 'firebase'
import { mapGetters } from 'vuex'
import sha256 from 'crypto-js/sha256'
require('firebase/firestore')
  export default {
    name: 'userDashboard',
    data: function () {
      return {
        question: {
          photoURL: null
        },
        answer: null,
        rank: null,
        level: null
      }
    },
    computed: {
      ...mapGetters([
          'getCurrentHash',
          'getPreviousHash',
          'getUser',
          'getCurrentLevel',
          'getPhone'
        ]),
      currentUser: () => firebase.auth().currentUser
    },
    methods: {
      calchas: function () {
        var hash = sha256(this.answer + '' + this.question.photoURL + '' + this.getCurrentHash).toString()
        firebase.firestore().collection('logs').add({
          UID: this.getUser.uid,
          displayName: this.getUser.displayName,
          answer: this.answer,
          currentLevel: parseInt(this.getCurrentLevel),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          email: this.getUser.email,
          phno: parseInt(this.getPhone)
        }).then((success) => {
          firebase.firestore().collection('q').doc('questions').collection(hash).doc(this.getCurrentHash).get().then((doc) => {
          if (doc.exists) {
            firebase.firestore().collection('users').doc(this.currentUser.uid).update({
              currentHash: hash,
              previousHash: this.getCurrentHash,
              currentLevel: this.getCurrentLevel + 1
              }).then((success) => {
                swal('Good job!', 'Correct Answer !', 'success')
                this.$store.commit('SET_PREVIOUS_HASH', this.getCurrentHash)
                this.$store.commit('SET_CURRENT_HASH', hash)
                this.question = {
                  photoURL: doc.data().photoURL,
                  previousHash: doc.data().id
                }
              })
            } else {
              swal('Sorry', 'Wrong Answer!!', 'error')
            }
          })
        })
      }
    },
    mounted () {
      console.log('mounted dashboard')
      firebase.firestore().collection('q').doc('questions').collection(this.getCurrentHash).doc(this.getPreviousHash).get().then((doc) => {
          if (doc.data().photoURL) {
            this.question = {
              photoURL: doc.data().photoURL,
              previousHash: doc.data().id
            }
          }
        })
      firebase.firestore().collection('leaderboard').orderBy('currentLevel', 'desc').orderBy('timestamp').onSnapshot((querySnapshot) => {
          var rank = 1
          querySnapshot.forEach((doc) => {
            if (this.getUser.displayName === doc.data().displayName) {
              this.rank = rank
              this.level = doc.data().currentLevel
            }
            rank = rank + 1
          })
      })
    }
  }
</script>
