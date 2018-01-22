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
	<section class="mbr-section article mbr-parallax-background mbr-after-navbar" id="msg-box8-8" style="position: absolute; top:10%; right:45%;">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-xs-center">
                <h3 class="mbr-section-title display-2">Rules</h3>
                <div class="lead"><p></p></div>
 </div>
        </div>
    </div>
</section> 
<section class="engine"></section><section class="mbr-cards mbr-section mbr-section-nopadding mbr-after-navbar" id="features4-3" style="background-color: rgb(255, 255, 255);">

    

    <div class="mbr-cards-row row">
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 100px; padding-bottom: 80px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><i class="fa fa-user-secret fa-4x" aria-hidden="true"></i></div>
                    <div class="card-block">
                        <h4 class="card-title">Admin is always right.</h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text">He's right above you.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 100px; padding-bottom: 80px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><i class="fa fa-pencil fa-4x" aria-hidden="true"></i></div>
                    <div class="card-block">
                        <h4 class="card-title">We suggest you enter FULL NAMES including space.</h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text">Answer is CASE INSENSITIVE.Eg.barton hills,Barton Hills,BARTON HILLS,BaRtOn HilLs are all same</p>
                        
                    </div>
                </div>
          </div>
        </div>
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 100px; padding-bottom: 80px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><i class="fa fa-check fa-4x" aria-hidden="true"></i></div>
                    <div class="card-block">
                        <h4 class="card-title">Play fair, the mods will be fair.</h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text">Dare to post answers in forum or any place known to us, be ready to face the consequences..</p>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
        
    </div>
</section>

<section class="mbr-cards mbr-section mbr-section-nopadding" id="features4-4" style="background-color: rgb(255, 255, 255);">

    

    <div class="mbr-cards-row row">
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 80px; padding-bottom: 80px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><i class="fa fa-search fa-3x" style="padding-top: 27px" aria-hidden="true"></i></div>
                    <div class="card-block">
                        <h4 class="card-title">Google &amp; Wiki they are both our boon and bane!!!!<div><br></div></h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text"></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 80px; padding-bottom: 80px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><i style="padding-left:0px !important;" class="fa fa-question fa-4x" aria-hidden="true"></i></div>
                    <div class="card-block">
                        <h4 class="card-title">Get Clues from our FB page</h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text">Clues for the levels may be found in page source and on the Facebook page.</p>
                        
                    </div>
                </div>
          </div>
        </div>
        <div class="mbr-cards-col col-xs-12 col-lg-4" style="padding-top: 80px; padding-bottom: 80px;">
            <div class="container">
                <div class="card cart-block">
                    <div class="card-img iconbox"><i style="padding-top:15px !important;"  class="fa fa-terminal fa-4x" aria-hidden="true"></i></div>
                    <div class="card-block">
                        <h4 class="card-title">Hackers, you guys rule.</h4>
                        <h5 class="card-subtitle"></h5>
                        <p class="card-text">Make any attempts and, you will be banned from the game.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<footer class="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-d" style="background-image: url(/static/images/footer.jpg); padding-top: 1.75rem; padding-bottom: 1.75rem;">
    <div class="container">
        <p class="text-xs-center">Copyright (c) 2017 Razorsharp.</p>
    </div>
</footer>
</div>
</template>
<script>
export default {
	data: function () {
			return {
				rules: null
			}
		},
	mounted () {
		console.log('Entered rules page')
	}
}
</script>
<style>
	.fa {
    padding: 20px 0 4px 5px;
    }

    .card-title {
        color: #C32E45 !important;
    }
</style>
