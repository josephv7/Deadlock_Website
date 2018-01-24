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
<section class="mbr-section" id="msg-box5-h" style="background-color: rgb(255, 255, 255); padding-top: 25px; padding-bottom: 30rem;">
  <div v-if="adminData.currentHash" class="container">
    <div class="col-md-6 lead">
      <h1>&nbsp;Upload Question</h1>
    <form v-on:submit.prevent="onSubmit">
<table class="table table-hover">
  <tr>
    <td class="userdetails_text">Photo URL :</td>
    <td><input type="text" v-model="adminData.photourl" class="form-control" name="fname"  value=""></td>
  </tr>
  <tr>
    <td class="userdetails_text">Answer :</td>
    <td><input type="text" v-model="adminData.answer" class="form-control" name="fname"  value=""></td>
  </tr>
  <tr>
    <td></td>
    <td><input type="submit" name="submit" value="Calculate Hash" class="col-xs-offset-2 btn btn-raised ripple-effect btn-primary btn-lg"></td>
  </tr>
</table>
</form>
</div>
<div class="col-md-6">
  <h1>&nbsp; Logs </h1>
  <table-component class="table table-hover" v-if="logs !== []" 
     :data="logs"
     sort-by="timestamp"
     sort-order="desc"
     >
     <table-column show="displayName" label="Name"></table-column>
     <table-column show="answer" label="Answer"></table-column>
     <table-column show="phno" label="Phone" data-type="numeric"></table-column>
     <table-column show="currentLevel" label="Level" data-type="numeric"></table-column>
     <table-column show="timestamp" label="Time" :filterable="false" data-type="date:DD/MM/YYYY"></table-column>
     <table-column show="email" label="EMail"></table-column>
 </table-component>
</div>
  </div>
  <div v-else>
    // content for no admin access
  </div>
</section>
</div>
</template>

<script>
import firebase from 'firebase'
import swal from 'sweetalert'
import { mapGetters } from 'vuex'
import sha256 from 'crypto-js/sha256'
require('firebase/firestore')
export default {
  name: 'adminDashboard',
  data: function () {
    return {
      adminData: {
        currentHash: null,
        photourl: null,
        answer: null,
        nextHash: null
      },
      logs: []
    }
  },
  computed: {
    ...mapGetters([
        'getCurrentHash',
        'getPreviousHash',
        'getUser'
      ]),
    currentUser: () => firebase.auth().currentUser
  },
  methods: {
      onSubmit: function () {
        var tohash = this.adminData.answer + '' + this.adminData.photourl + '' + this.adminData.currentHash
        this.adminData.nextHash = sha256(tohash).toString()
        swal('Hashed', this.adminData.nextHash, 'success')
      }
  },
  mounted () {
    firebase.firestore().collection('latest').doc('updateMe').get().then((doc) => {
      this.adminData.currentHash = doc.data().currentHash
    })

    firebase.firestore().collection('logs').orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => {
      var logs = []
      querySnapshot.forEach((doc) => {
        logs.push({
          UID: doc.data().UID,
          displayName: doc.data().displayName,
          answer: doc.data().answer,
          currentLevel: doc.data().currentLevel,
          timestamp: doc.data().timestamp,
          email: doc.data().email,
          phno: doc.data().phno
        })
      })
      this.logs = logs
    })
  }
}
</script>

<style>
  .table-component__filter__field {
    background-color: #f5f5f5;
    border-radius: 3px;
    border: 0px;
    margin-left: 30rem;
    box-shadow: none;
    color: #565656;
    font-size: 0.875rem;
    line-height: 1.43;
    min-height: 3.5em;
    padding: 0.5em 1.07em 0.5em;
  }
  th {
    color: #C13A48;
  }
</style>
