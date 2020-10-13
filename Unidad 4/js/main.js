
//Verifica que las contraseñas coincidan
function validate(){
    if($("#ps1").val() == $("#ps2").val()){
      $("#ps1").removeClass('is-invalid') 
      $("#ps2").removeClass('is-invalid') 
      return true
    }else{
      $("#ps1").addClass('is-invalid') 
      $("#ps2").addClass('is-invalid') 
      swal("","Las contraseñas no coinciden","error");
      return false
    }

  }
  //Elimina un usuario del a base de datos
  function remove(id,target,token){
    swal({
        title: "",
        text: "'¿Desea eliminar el usuario?'",
        icon: "warning",
        buttons: ["Cancelar","Eliminar"],
        dangerMode: true,
      }).then((willDelete) => {
          if (willDelete) {
            $.ajax({
              type: "POST",
              url: "users",
              data:{
                  "action": "remove",
                  "id": id,
                  "token": $("#token").val(),
              },
              success: function (data) {
                console.log(data)
                if(data.status == "success"){
                  $(target).parent().parent().remove();
                  swal("El usuario se ha eliminado correctamente", {
                    icon: "success",
                  });
                }
              },
              error: function(err){
                  console.error(err);
              }
          });
      }
    });
  }
  //Cambia el valor del POST para editar en la base de datos
  function edit(target){
      var data = $(target).data('info');
      $('#action').val("update");
      $('#id').val(data['id']);
      $('#nam').val(data['nombre']);
      $('#mail').val(data['email']);
      $('#ps1').val(data['pass']);
      $('#ps2').val(data['pass']);
  }

function clearForm(){
  document.getElementById("form").reset();
}