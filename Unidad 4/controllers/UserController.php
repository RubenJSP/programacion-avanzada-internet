<?php
include_once 'config.php';
include_once 'conection.php';

if(isset($_POST) && isset($_POST['action'])){
    var_dump($_POST);
    $user = new UserController();
    switch ($_POST['action']) {
        case 'store':
            $name = strip_tags($_POST['name']);
            $email = strip_tags($_POST['email']);
            $password = strip_tags($_POST['password']);
            try {
                $user->store($name,$email,$password);
                $_SESSION['status'] = "success";
                $_SESSION['msg'] = "Guardado correctamente";
                header('Location: ../');
            }
            catch(PDOException $e) {
                $_SESSION['status'] = "error";
                $_SESSION['msg'] = "Registro no guardado";
                header('Location: ../');
                exit;
            }

            break;
        
        default:
            # code...
            break;
    }
}

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

    function store($name,$mail,$password) {
        $connection = connect();
        if($name!="" && $mail!="" && $password!=""){    
            $query = "INSERT INTO users (nombre,email,pass)VALUES(:nombre,:email,:pass)";
            $stm = $connection->prepare($query);
            $stm->bindParam(':nombre', $name);
            $stm->bindParam(':email', $mail);
            $stm->bindParam(':pass', $password);
            $stm->execute();
        }else{
            
        }
       
	}
}

?>