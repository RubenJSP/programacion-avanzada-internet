<?php 
    function connectDB() 
    {
        $dsn = 'mysql:host=localhost;dbname=userdata';
        $username = 'root';
        $password = '';
        return new PDO($dsn, $username);
    }
    


?>