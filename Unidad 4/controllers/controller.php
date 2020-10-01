<?php
include_once 'config.php';
include_once 'conection.php';
Class UserController{

    function get(){
        $connection = connect();
        if($connection){
            $query = 'SELECT * FROM users';
            $stm = $connection->prepare($query);
            $stm->setFetchMode(PDO::FETCH_ASSOC);
            $stm->execute();
            $data = $stm->fetchAll();
            if($data){
                return $data;
            }else{
                return array();
            }
        }else{
            return array();
        }
    }
}

?>