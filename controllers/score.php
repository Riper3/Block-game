<?php
  $rawjson = file_get_contents('../JSON/bbdd.json');
  $json = json_decode($rawjson, true);
  // Order by score
  $scores = array();
  foreach ($json as $key => $row)
  {
      $scores[$key] = $row['score'];
  }
  array_multisort($scores, SORT_DESC, $json);
