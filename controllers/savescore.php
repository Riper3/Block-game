<?php

 if(!empty($_POST['name']) && !empty($_POST['score']) && !empty($_POST['mode']))
 {
   $bbdd = "../JSON/bbdd.json";

   $formdata = array(
    'name' => $_POST['name'],
    'score' => $_POST['score'],
    'mode' => $_POST['mode'],
    'seconds' => $_POST['seconds']
   );

   $jsondata = file_get_contents($bbdd);

   $data = json_decode($jsondata, true);

   array_push($data, $formdata);

   $jsondata = json_encode($data, JSON_PRETTY_PRINT);

   if(file_put_contents($bbdd, $jsondata))
    {
  	  echo 'Data successfully saved';
  	}
    else
    {
      echo "Error";
    }
    header("Location: /index.html");
    exit;
  }
  else
  {
    echo "Bad request";
  }
