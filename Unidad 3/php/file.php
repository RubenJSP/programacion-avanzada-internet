<?php 
    include_once 'conectar.php';
    if(!isset($_POST['get'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $year = $_POST['year'];
    }

    function saveUser($email, $password, $year) 
	{
		$dbh = connectDB();
		$query = 'INSERT INTO usuario (email,password,year)VALUES(:email,:password,:year)';
		$stm = $dbh->prepare($query);
		$stm->bindParam(':email', $email);
		$stm->bindParam(':password', $password);
		$stm->bindParam(':year', $year);
		$stm->execute();
    }

    function getData(){
        $dbh = connectDB();
        $query = 'SELECT * FROM usuario';
        $stm = $dbh->prepare($query);
        $stm->setFetchMode(PDO::FETCH_ASSOC);
        $stm->execute();
        $data = $stm->fetchAll();
        header('Content-Type: application/json');
        return json_encode($data);
    }
    
    if(isset($email)&&isset($password) && isset($year)){
        saveUser($email, $password, $year);
    }

    if(isset($_POST['get'])){
        echo getData();
    }
?>