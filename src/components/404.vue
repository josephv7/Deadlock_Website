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
                <h3 class="mbr-section-title display-2">404 Wrong Page</h3>
                <div class="lead"><p></p></div>
 </div>
        </div>
    </div>
</section> 
<section class="mbr-section-full article mbr-section__container" id="content1-b" style="background-color: rgb(255, 255, 255); padding-top: 20px; padding-bottom: 20px; ">

    <div class="container ">
        <div class="row">
            <div class="col-xs-12 col-md-12 text-xs-center">
<div class="container" style=" padding-bottom: 70px; " >
<div class="mbr-table-cell mbr-right-padding-md-up mbr-valign-top col-md-5 image-size" style="width: 50%;">
                  <img src="/static/images/meme_404.jpg" class="img-rounded" alt=" Image appears here ">
              </div>
              <br><br>
<router-link class="btn btn-primary btn-lg col-md-offset-2 col-md-8" to="/">GET ME OUT OF HERE</router-link>
</div>
       
            </div>
        </div>
    </div>
</section>
	</div>
</template>
