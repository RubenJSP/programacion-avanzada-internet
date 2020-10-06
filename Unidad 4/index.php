<?php
  include 'controllers/UserController.php';
  $user = new UserController();
  $datos = $user->get();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn bootstrap</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
  </head>
<body>
    <div class="wrapper">
        <div class="container"> 
            <!-- NAV-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">PAGINA</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sm-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mas comida 
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Tacos</a>
                        <a class="dropdown-item" href="#">Burritos</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Cuernitos</a>
                    </div>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Registro</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Escribe aquí" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                </div>
            </nav>
            <!--BREAD-->
            <div class="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>
                <!-- NOTIFICACION-->
                  <?php if(isset($_SESSION['status']) && $_SESSION['status']=="success"): ?>
                    <div class="alert alert-success" role="alert">
                      Se ha registrado exitosamente!
                    </div>
                    <?php unset($_SESSION['status'])?>
                  <?php endif ?>

                  <?php if(isset($_SESSION['status']) && $_SESSION['status']=="error"): ?>
                    <div class="alert alert-danger" role="alert">
                      <strong><?php echo $_SESSION['msg'] ?> No se pudo registrar</strong>
                    </div>
                    <?php unset($_SESSION['status'])?>
                  <?php endif ?>

                <div class="row">
                    <div class="col-12 md-4">
                        <div class="card">
                            <div class="card-header">
                               Usuarios registrados
                              <button type="button" data-toggle="modal" data-target="#staticBackdrop" class="btn btn-primary float-right">Añadir usuario</button>
                            </div>
                            <div class="card-body">
                                <table class="table table-striped">
                                    <thead class="thead-dark">
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Estatus</th>
                                        <th scope="col">Acciones</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                    <?php if(isset($datos) && count($datos)>0):?>
                                      <?php foreach ($datos as $user): ?>
                                        <tr>
                                        <th scope="row"><?php echo $user['id']; ?></th>
                                        <td><?php echo $user['nombre']; ?></td>
                                        <td><a href="mailto:<?php echo $data['email']; ?>"><?php echo $user['email'];?></a></td>
                                        <td>
                                        <?php if($user['estatus']): ?>
                                          <span class="badge badge-success">Activo</span>
                                        <?php else: ?>
                                          <span class="badge badge-danger">Inactivo</span>
                                        <?php endif ?>
                                        </td>
                                        <td>
                                          <button type="button" class="btn btn-warning"><i class="fas fa-pencil-alt"></i> Editar</button>
                                          <button type="button" class="btn btn-danger" onclick="remove(<?php $user['id']?>)"><i class="fas fa-trash-alt"></i> Eliminar</button>
                                        </td>
                                      </tr> 
                                        <?php endforeach ?>
                                    <?php endif ?>                 
                                    </tbody>
                                  </table>
                            </div>
                          </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    <div class="modal" id="staticBackdrop" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Registrar usuario</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <div class="modal-body">
                <form action ="controllers/UserController.php" method ="POST" onsubmit="return validate()">
                  <div class="form-group">
                    <label for="name">Nombre completo</label>
                    <div class="input-group input-group-sm">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input name="name" type="text" class="form-control fix-rounded-right" required>
                      <div class="invalid-feedback">
                        No introducir numeros
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="mail">E-Mail</label>
                    <div class="input-group input-group-sm">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                      </div>
                      <input name="email" type="text" class="form-control fix-rounded-right" required>
                      <div class="invalid-feedback">
                        No introducir numeros
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Contraseña</label>
                    <div class="input-group input-group-sm">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                      </div>
                      <input name="password" type="password" class="form-control fix-rounded-right" id="ps1" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Repetir contraseña</label>
                    <div class="input-group input-group-sm">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                      </div>
                      <input type="password" class="form-control fix-rounded-right" id="ps2" required>
                    </div>
                    <input  type="hidden" name="action" value="store">
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary btn-warning" data-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary">Guardar</button>
                  </div>
                </form>
              </div>   
          </div>
        </div>
      </div>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
  </body>
</html>