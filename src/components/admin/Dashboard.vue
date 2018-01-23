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
                <h3 class="mbr-section-title display-2">Admin Panel</h3>
                <div class="lead"><p></p></div>
 </div>
        </div>
    </div>
</section> 

<section class="mbr-section" id="msg-box5-h" style="background-color: rgb(255, 255, 255); padding-top: 25px; padding-bottom: 120px;">
  <div v-if="data">
    // content for admin access
  </div>
  <div v-else>
    // content for no admin access
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
export default {
  name: 'adminDashboard',
  data: function () {
    return {
      data: 1
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
      
  },
  mounted () {
    
  }
}
</script>
