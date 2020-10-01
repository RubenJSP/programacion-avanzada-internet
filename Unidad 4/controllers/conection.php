<?php
    define("USER","root");
    define("PASSWORD","");
    define("HOST","localhost");
    define("DBN","users");
     function connect() 
     {
         $dsn = 'mysql:host='.HOST.';dbname='.DBN;
         return new PDO($dsn,USER,PASSWORD ,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
         die(json_encode(array('outcome' => true)));
     }
?>