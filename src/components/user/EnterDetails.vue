<template>
  <div>
<section class="engine"></section><section class="mbr-section article mbr-parallax-background mbr-after-navbar" id="msg-box8-8" style="background-image: url(/static/images/jumbotron.jpg); padding-top: 120px; padding-bottom: 120px;">

    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(34, 34, 34);">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-xs-center">
                <h3 class="mbr-section-title display-2" style="font-size: 2rem">COMPLETE REGISTRATION</h3>
                
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

<footer class="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-d" style="background-image: url(/static/images/footer.jpg); padding-top: 1.75rem; padding-bottom: 1.75rem;">
    
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
