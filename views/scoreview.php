<?php  require('../controllers/score.php');  ?>
<head><script src="../frontedjs/include.js"></script></head>

<div id="nav"></div>

<div id="index-content">
    <div class="scorecolum topscore">Name</div>
    <div class="scorecolum topscore">Score</div>
    <div class="scorecolum topscore">Mode</div>
    <div class="scorecolum topscore">Seconds</div>
<?php
  foreach ($json as $key => $value)
  {
    echo '<div class="scorerow">';
    echo '<div class="scorecolum"> '.$value['name'].' </div>';
    echo '<div class="scorecolum"> '.$value['score'].' </div>';
    echo '<div class="scorecolum"> '.$value['mode'].' </div>';
    echo '<div class="scorecolum"> '.$value['seconds'].' </div>';
    echo '</div>';
  }
?>
</div>
<div id="footer"></div>
<script>
  include("headnav.html", document.getElementById("nav"));
  include("footer.html", document.getElementById("footer"));
  include("headers.html", document.getElementsByTagName("head")[0]);
</script>
