<template>
  <div>
       
  <section class="mbr-section article mbr-parallax-background mbr-after-navbar" style="padding-top: 10rem; padding-bottom: 5rem;" id="msg-box8-8">
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
    <td><input required type="text" v-model="displayName" class="form-control" name="fname" readonly="readonly" value=""></td>
  </tr>

  <tr>
    <td class="userdetails_text">Email:</td>
    <td><input required type="text" v-model="email" class="form-control" name="email" readonly="readonly" value="" ></td>
  </tr>

  <tr>
    <td required class="userdetails_text">Mobile No:</td><td><input type="number" required v-model="mobno" class="form-control" name="mobno"></td>
  </tr>

  <tr v-if="rset">
    <td><label for="sel1" class="userdetails_text">Participant Type:</label></td>
    <td><select required v-model="college" class="form-control" name ="college" id="sel1">
      <option value = "RSET ALUMNI">RSET ALUMNI</option>
      <option value = "RSET STUDENT">RSET STUDENT</option>
      <option value = "RSET TEACHER">RSET TEACHER</option>
      <option value="others">Others</option>
    </select><div id="div1"></div></td>
  </tr>
  <tr v-else>
    <td><label for="sel1" class="userdetails_text">College:</label></td>
    <td><input type="text" required v-model="college" class="form-control" name="college"/></td>
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
import swal from 'sweetalert'
require('firebase/firestore')
  export default {
    name: 'EnterDetails',
    data: function () {
      return {
        displayName: null,
        email: null,
        mobno: null,
        college: null,
        rset: true,
        currentUser: null
      }
    },
    methods: {
      onSubmit: function () {
        if (this.mobno === null) {
          swal('Sorry', 'Mobile number cannot be blank', 'error')
        } else if (this.mobno.length !== 10) {
           swal('Sorry', 'Enter a valid Mobile Number', 'error')
        } else {
          firebase.firestore().collection('users').doc(this.currentUser.uid).set({
            displayName: this.displayName,
            email: this.email,
            mobno: this.mobno,
            college: this.college,
            photoURL: this.currentUser.photoURL,
            currentLevel: 0,
            currentHash: 'dd4afcb2dcb9a1f9e93348f2c49a9fee3e3a79936ed86760cc15b87be47cbe23',
            previousHash: '16d63cfb10cbe791c4502c6d4af173462a43785d6cfedfa5e931115e006abd9e'
          }).then((success) => {
            swal('Done', 'Entered details', 'success').then(success => {
              this.$router.replace('/user/dashboard')
            })
          })
        }
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
