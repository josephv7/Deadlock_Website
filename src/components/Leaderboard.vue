<template>
  <div>
<section class="engine"></section><section class="mbr-section article mbr-parallax-background mbr-after-navbar" id="msg-box8-8" style="background-image: url(assets/images/jumbotron.jpg); padding-top: 150px; padding-bottom: 80px;">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-xs-center">
                <h3 class="mbr-section-title display-4">LEADERBOARD</h3>
                <div class="lead"><p>Don't rest until you climb to the top..!!.</p></div>
 </div>
        </div>
    </div>
</section> 
<section class="mbr-section-full article mbr-section__container" id="content1-b" style="background-color: rgb(255, 255, 255); padding-top: 20px; padding-bottom: 20px; ">

    <div class="container col-md-offset-1 ">
        <div class="row">
            <div class="col-xs-12 col-md-12 table-responsive">
     
<table class="table table-hover">

<thead style="color: #00964d;"><tr><th>Rank</th><th>Name</th><th>College</th><th>Level</th></tr></thead><tbody>

<!-- <?php
if($res!=null)
{
$flag = 0;
for($i=0;$i<$res->num_rows;$i++)
{
  $r=$res->fetch_assoc();
if($i >= 99) {
  if($flag == 0 &&$userdata!=0&& $r['id']==$userdata['id'] ) {
    $flag = 1;
    echo '<tr><th scope = "row" style="color: #00964d;" > .. </th><td> .. </td><td> .. </td><td> .. </td></tr>';
echo '<tr class="table-success"><th scope = "row" style="color: #00964d;" >'.(($i)+1).'</th><td>'.$r['Name'].'</td><td>'.$r['college'].'</td><td>'.($r['lvlno']) .'</td></tr>';
  }
  continue;
}

if($userdata!=0&&$r['id']==$userdata['id']){
//highlight this

$flag = 1;
echo '<tr class="table-success"><th scope = "row" style="color: #00964d;" >'.(($i)+1).'</th><td>'.$r['Name'].'</td><td>'.$r['college'].'</td><td>'.($r['lvlno']) .'</td></tr>';
}
else{


echo '<tr><th scope = "row" style="color: #00964d;" >'.(($i)+1).'</th><td>'.$r['Name'].'</td><td>'.$r['college'].'</td><td>'.($r['lvlno']) .'</td></tr>';

}
}

}

echo '<tr><th scope = "row" style="color: #00964d;" > .. </th><td> .. </td><td> .. </td><td> .. </td></tr>';

echo '<tr><th scope = "row" style="color: #00964d;" >'.($count).'</th><td>'.$r['Name'].'</td><td>'.$r['college'].'</td><td>'.($r['lvlno']) .'</td></tr>';

?> -->
</tbody>
</table>
       
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
  </body>
</html>


  </div>
</template>
