<template>
  <div style="background-color: black;">
<section class="engine"></section>
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
      <section class="mbr-section article mbr-parallax-background mbr-after-navbar" id="msg-box8-8" style="  position: absolute; top:10%; right:40%;">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-xs-center">
                <h3 class="mbr-section-title display-4">LEADERBOARD</h3>
                <div class="lead"><p>Don't rest until you climb to the top..!!.</p></div>
 </div>
        </div>
    </div>
</section> 
<section class="mbr-section-full article mbr-section__container" id="content1-b" style="background-color: rgb(255, 255, 255); padding-top: 20px; padding-bottom: 20px; ">

    <div class="container col-md-offset-2 ">
        <div class="row">
            <div class="col-xs-12 col-md-12 table-responsive">
     
<table class="table table-hover">

  <thead style="color: #C32E45;">
    <tr><th>Rank</th><th>Name</th><th>College</th><th>Level</th></tr>
  </thead>
  <tbody>
  <tr v-for="(lead,key) in leaderboard" v-bind:key="key"><td>{{key+1}}</td><td>{{lead.name}}</td><td>{{lead.college}}</td><td>{{lead.level}}</td></tr>
  </tbody>
</table>
       
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
  data: function () {
    return {
      leaderboard: []
    }
  },
  mounted () {
    firebase.firestore().collection('leaderboard').orderBy('currentLevel', 'desc').orderBy('timestamp').limit(100).onSnapshot((querySnapshot) => {
        var lead = []
        var rank = 1
        querySnapshot.forEach(function (doc) {
          lead.push({
            rank: rank,
            name: doc.data().displayName,
            college: doc.data().college,
            level: doc.data().currentLevel
          })
          rank = rank + 1
        })
        this.leaderboard = lead
    })
  }
}
</script>
