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

           
<form action="complete.php" method="POST">
<p><!-- <?php phpAlert($errmsg); ?> --></p>
<table class="table table-hover">
  <tr>
    <td class="userdetails_text">First Name:</td>
    <td><input type="text" class="form-control" name="fname" readonly="readonly" value=""></td>
  </tr>

  <tr>
    <td class="userdetails_text">Last Name:</td>
    <td><input type="text"  class="form-control" name="lname"  readonly="readonly" value=""></td>
  </tr>

  <tr>
    <td class="userdetails_text">Email:</td>
    <td><input type="text" class="form-control" name="email" readonly="readonly" value="" ></td>
  </tr>

  <tr>
    <td class="userdetails_text">Mobile No:</td><td><input type="text" class="form-control" name="mobno"></td>
  </tr>

  <tr>
    <td><label for="sel1" class="userdetails_text">College:</label></td>
    <td><select class="form-control" name ="college" id="sel1">
      <option value = "RSET">RSET</option>
      <option>Others</option>
    </select><div id="div1"></div></td>
  </tr>

  <tr>
    <td></td>
    <td><input type="submit" name="submit" class="col-xs-offset-2 btn btn-raised ripple-effect btn-primary btn-lg"></td>
  </tr>
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

  <input name="animation" type="hidden">
   <div id="scrollToTop" class="scrollToTop mbr-arrow-up"><a style="text-align: center;"><i class="mbr-arrow-up-icon"></i></a></div>
  </div>
</template>

<script>
  export default {
    name: 'EnterDetails',
    data: function () {
      return {
        firstName: null,
        lastName: null,
        email: null
      }
    }
  }
</script>
