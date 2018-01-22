<template><div>

  <section class="mbr-section article mbr-parallax-background mbr-after-navbar" id="msg-box8-e" style="background-image: url(/static/images/jumbotron.jpg);">

    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-xs-center">
                <h3 class="mbr-section-title display-2">Overclock your Brain</h3>
                
                
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
  sans-serif; color: '#00964d';
  letter-spacing: -1px;">1 
<!-- //TODO TANK -->
</span></div></div>
 
    <div v-if="!question" class="container" style=" padding-bottom: 70px; " >
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
</section>
<footer class="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-d" style="background-image: url(/static/images/footer.jpg); padding-top: 1.75rem; padding-bottom: 1.75rem;">
    
    <div class="container">
        <p class="text-xs-center">Copyright (c) 2017 Razorsharp.</p>
    </div>
</footer></div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
import sha256 from 'crypto-js/sha256'
require('firebase/firestore')
  export default {
    name: 'userDashboard',
    data: function () {
      return {
        question: null,
        answer: null
      }
    },
    computed: {
      ...mapGetters([
          'getCurrentHash',
          'getPreviousHash'
        ])
    },
    methods: {
      calchas: function () {
        console.log(sha256(this.answer + '' + this.question.photoURL + '' + this.getCurrentHash).toString())
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
    }
  }
</script>
