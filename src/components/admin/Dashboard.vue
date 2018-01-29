<template>
  <div>
  <section class="mbr-section article mbr-parallax-background mbr-after-navbar"  style="padding-top: 10rem; padding-bottom: 5rem;" id="msg-box8-8">
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
    <td class="userdetails_text">Choose File  :</td>
    <td><div class="fileinput fileinput-new" data-provides="fileinput">
                    <span class="btn btn-default btn-file chosefile">
                      <input type="file" @change="onFileChange" />
                    </span>
                    <span v-text="filename" class="filemsg"></span>
                  </div></td>
  </tr>
  <tr>
    <td class="userdetails_text">Answer :</td>
    <td><input type="text" v-model="adminData.answer" class="form-control" name="fname"  value=""></td>
  </tr>
  <tr>
    <td></td>
    <td><input type="submit" name="submit" value="Upload Question" class="col-xs-offset-2 btn btn-raised ripple-effect btn-primary btn-lg"></td>
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
require('firebase/storage')
export default {
  name: 'adminDashboard',
  data: function () {
    return {
      adminData: {
        currentHash: null,
        photourl: null,
        answer: null,
        nextHash: null,
        previousHash: null,
        level: null
      },
      logs: [],
      file: null,
      filename: null
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
        var storageRef = firebase.storage().ref().child('deadlock_questions/')
        storageRef.child(this.filename).put(this.file).then(success => {
          this.adminData.photourl = success.downloadURL
          var batch = firebase.firestore().batch()
          var tohash = this.adminData.answer + '' + this.adminData.photourl + '' + this.adminData.currentHash
          this.adminData.nextHash = sha256(tohash).toString()
          batch.update(firebase.firestore().doc(`q/questions/${this.adminData.currentHash}/${this.adminData.previousHash}`), {
            photoURL: this.adminData.photourl
          })
          batch.set(firebase.firestore().doc(`q/questions/${this.adminData.nextHash}/${this.adminData.currentHash}`), {
            level: parseInt(this.adminData.level) + 1,
            photoURL: null
          })
          batch.set(firebase.firestore().doc('latest/updateMe'), {
            level: parseInt(this.adminData.level) + 1,
            currentHash: this.adminData.nextHash,
            previousHash: this.adminData.currentHash
          })
          batch.commit().then(success => {
            swal('Hashed', 'Uploaded', 'success')
          })
        })
      },
      onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.file = files[0]
      this.filename = this.file.name
      }
  },
  mounted () {
    firebase.firestore().collection('latest').doc('updateMe').get().then((doc) => {
      this.adminData.currentHash = doc.data().currentHash
      this.adminData.previousHash = doc.data().previousHash
      this.adminData.level = doc.data().level
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
