<template>
  <div>
    <section class="mbr-section article mbr-parallax-background mbr-after-navbar" style="padding-top: 10rem; padding-bottom: 5rem;" id="msg-box8-8">
      <div class="container">
          <div class="row">
            <div class="col-md-12 text-xs-center">
              <h3 class="mbr-section-title display-4">LEADERBOARD</h3>
              <div class="lead"><p>Don't rest until you climb to the top..!!.</p></div>
            </div>
          </div>
      </div>
    </section>
    <section class="mbr-section mbr-section-nopadding mbr-after-navbar" id="content1-b" style="background-color: rgb(255, 255, 255); padding-top: 20px; padding-bottom: 20rem; ">

      <div class="container ">
        <div class="row">
          <div class="col-xs-12 col-md-12 table-responsive">
            <table class="table table-hover">
              <thead style="color: #4dc0bf;">
                <tr><th>Rank</th><th>Name</th><th>Participant Type</th><th>Level</th></tr>
              </thead>
              <tbody>
                <tr v-for="(lead,key) in leaderboard" v-bind:key="key">
                  <td style="text-align:left">{{key+1}}</td><td style="text-align:left">{{lead.name}}</td><td style="text-align:left">{{lead.college}}</td><td style="text-align:left">{{lead.level}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <input name="animation" type="hidden">
    <div id="scrollToTop" class="scrollToTop mbr-arrow-up">
      <a style="text-align: center;"><i class="mbr-arrow-up-icon"></i></a>
    </div>
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
