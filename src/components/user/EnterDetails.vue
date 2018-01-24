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
                <h3 class="mbr-section-title display-2">Enter Details</h3>
                <div class="lead"><p></p></div>
 </div>
        </div>
    </div>
</section> 

<section class="mbr-section article mbr-section__container" id="content1-b" style="background-color: rgb(255, 255, 255); padding-top: 20px; padding-bottom: 20px;">

    <div class="container">
        <div class="row">
            <div class="col-xs-12 lead">

           
<form v-on:submit.prevent="onSubmit">
<table class="table table-hover">
  <tr>
    <td class="userdetails_text">Name:</td>
    <td><input type="text" v-model="displayName" class="form-control" name="fname" readonly="readonly" value=""></td>
  </tr>

  <tr>
    <td class="userdetails_text">Email:</td>
    <td><input type="text" v-model="email" class="form-control" name="email" readonly="readonly" value="" ></td>
  </tr>

  <tr>
    <td class="userdetails_text">Mobile No:</td><td><input type="text" v-model="mobno" class="form-control" name="mobno"></td>
  </tr>

  <tr>
    <td class="userdetails_text">Address:</td><td><input type="text" v-model="address" class="form-control" name="mobno"></td>
  </tr>

  <tr v-if="rset">
    <td><label for="sel1" class="userdetails_text">College:</label></td>
    <td><select v-model="college" class="form-control" name ="college" id="sel1">
      <option value = "RSET">RSET</option>
      <option value="others">Others</option>
    </select><div id="div1"></div></td>
  </tr>
  <tr v-else>
    <td><label for="sel1" class="userdetails_text">College:</label></td>
    <td><input type="text" v-model="college" class="form-control" name="college"/></td>
  </tr>

  <tr>
    <td></td>
    <td><input type="submit" name="submit" value="Submit" class="col-xs-offset-2 btn btn-raised ripple-effect btn-primary btn-lg"></td>
  </tr>
</table>
</form>
            
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
    name: 'EnterDetails',
    data: function () {
      return {
        displayName: null,
        email: null,
        mobno: null,
        college: null,
        address: null,
        rset: true,
        currentUser: null
      }
    },
    methods: {
      onSubmit: function () {
        firebase.firestore().collection('users').doc(this.currentUser.uid).set({
          displayName: this.displayName,
          email: this.email,
          mobno: this.mobno,
          college: this.college,
          address: this.address,
          photoURL: this.currentUser.photoURL,
          currentHash: 'dd4afcb2dcb9a1f9e93348f2c49a9fee3e3a79936ed86760cc15b87be47cbe23',
          previousHash: '16d63cfb10cbe791c4502c6d4af173462a43785d6cfedfa5e931115e006abd9e'
        }).then((success) => {
          console.log('Successfully registered')
        })
      }
    },
    mounted () {
      this.currentUser = firebase.auth().currentUser
      this.displayName = this.currentUser.displayName
      this.email = this.currentUser.email
      // this.firstName = currentUser.firstName
    },
    watch: {
      college: function (val) {
        if (val !== 'RSET') {
          this.rset = false
        } else if (val === 'others') {
          this.college = null
        }
      }
    }
  }
</script>
