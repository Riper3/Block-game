<?php  require('../controllers/score.php');  ?>
<head><script src="../frontedjs/include.js"></script></head>

<div id="nav"></div>

<div id="index-content">
    <div class="col-xs-4">Name</div>
    <div class="col-xs-4">Score</div>
    <div class="col-xs-4">Mode</div>
<?php
  foreach ($json as $key => $value)
  {
    echo '<div class="scorerow">';
    echo '<div class="col-xs-4"> '.$value['name'].' </div>';
    echo '<div class="col-xs-4"> '.$value['score'].' </div>';
    echo '<div class="col-xs-4"> '.$value['mode'].' </div>';
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
