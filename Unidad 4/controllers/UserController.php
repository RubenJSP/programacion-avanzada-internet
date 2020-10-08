<?php
include_once 'config.php';
include_once 'connection.php';

if(isset($_POST) && isset($_POST['action'])){
    var_dump($_POST);
    $user = new UserController();
    switch ($_POST['action']) {
        case 'store':
            $name = strip_tags($_POST['name']);
            $email = strip_tags($_POST['email']);
            $password = strip_tags($_POST['password']);
            try {
                if(!ctype_space($name)&&!ctype_space($mail)&&!ctype_space($password)){
                    $user->store($name,$email,$password);
                    $_SESSION['status'] = "success";
                    $_SESSION['msg'] = "Registrado";
                }else{
                    $_SESSION['status'] = "error";
                    $_SESSION['msg'] = "Registro no guardado";
                }
                header('Location: ../');
            }
            catch(PDOException $e) {
                $_SESSION['status'] = "error";
                $_SESSION['msg'] = "Registro no guardado";
                header('Location: ../');
                exit;
            }
            break;
        case 'update':
            $id = strip_tags($_POST['id']);
            $name = strip_tags($_POST['name']);
            $email = strip_tags($_POST['email']);
            $password = strip_tags($_POST['password']);
            try {
                if(!ctype_space($name)&&!ctype_space($mail)&&!ctype_space($password) && $id!=""){
                    $user->update($id,$name,$email,$password);
                    $_SESSION['status'] = "success";
                    $_SESSION['msg'] = "Se ha actualizado correctamente";
                }else{
                    $_SESSION['status'] = "error";
                    $_SESSION['msg'] = "No se ha podido actualizar";
                }
                header('Location: ../');
            }
            catch(PDOException $e) {
               $_SESSION['status'] = "error";
                $_SESSION['msg'] = "No se ha podido actualizar";
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
            return array();
        }
       
    }

    function update($id,$name,$mail,$password) {
        $connection = connect();
        if($name!="" && $mail!="" && $password!="" && $id!=""){    
            $query = "UPDATE users SET nombre=?,email=?,pass=? WHERE id=?";
            $stm = $connection->prepare($query);
            $stm->execute([$name,$mail,$password,$id]);
        }else{
            return array();
        }
       
    }
}

?>