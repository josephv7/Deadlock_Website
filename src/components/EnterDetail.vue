<template>
  <div>
<section class="engine"></section><section class="mbr-section article mbr-parallax-background mbr-after-navbar" id="msg-box8-8" style="background-image: url(assets/images/jumbotron.jpg); padding-top: 120px; padding-bottom: 120px;">

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

           
<form action="complete.php" method="POST">

<p><?php phpAlert($errmsg); ?></p>
<table class="table table-hover" padding=10101010101010101010px>
<tr><td class="userdetails_text">First Name:</td><td><input type="text" class="form-control" name="fname" readonly="readonly" value="<?php echo $fname;?>"></input></td></tr>

<tr><td class="userdetails_text">Last Name:</td><td><input type="text"  class="form-control" name="lname"  readonly="readonly" value="<?php echo $lname;?>"></input></td></tr>

<tr><td class="userdetails_text">Email:</td><td><input type="text" class="form-control" name="email" readonly="readonly" value="<?php echo $email;?>" ></input></td></tr>

<tr><td class="userdetails_text">Mobile No:</td><td><input type="text" class="form-control" name="mobno"></input></td></tr>
  <tr><td><label for="sel1" class="userdetails_text">College:</label></td><td>
 <script type="text/javascript">
function showfield(name){
  if(name=='Others') { 
    document.getElementById('div1').innerHTML=' <input type="text"  class="form-control" name="college"/>'; 
    document.getElementById("sel1").style.display = 'none';
}
  else document.getElementById('div1').innerHTML='';
}
</script>
  <select class="form-control" name ="college" id="sel1" onchange="showfield(this.options[this.selectedIndex].value)">
    <option value = "RSET">RSET</option>
    <option>Others</option>
  </select>
<div id="div1"></div></td></tr>

<tr><td></td><td><input type="submit" name="submit" class="col-xs-offset-2 btn btn-raised ripple-effect btn-primary btn-lg"></input></td></tr>
</table>

</form>
            
            </div>
        </div>
    </div>

</section>

<footer class="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-d" style="background-image: url(/assets/images/footer.jpg); padding-top: 1.75rem; padding-bottom: 1.75rem;">
    
    <div class="container">
        <p class="text-xs-center">Copyright (c) 2017 Razorsharp.</p>
    </div>
</footer>

<!-- 
  <script src="assets/web/assets/jquery/jquery.min.js"></script>
  <script src="assets/tether/tether.min.js"></script>
  <script src="assets/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/smooth-scroll/SmoothScroll.js"></script>
  <script src="assets/dropdown/js/script.min.js"></script>
  <script src="assets/touchSwipe/jquery.touchSwipe.min.js"></script>
  <script src="assets/viewportChecker/jquery.viewportchecker.js"></script>
  <script src="assets/jarallax/jarallax.js"></script>
  <script src="assets/theme/js/script.js"></script>
   -->
  
  <input name="animation" type="hidden">
   <div id="scrollToTop" class="scrollToTop mbr-arrow-up"><a style="text-align: center;"><i class="mbr-arrow-up-icon"></i></a></div>
  </div>
</template>
