/* document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });


  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }

    
  this.submit();
} */


/* function valida_envia(){
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
       alert("Falta nombre")
       document.fvalida.nombre.focus()
       return 0;
  }else{
    if (document.fvalida.apellido.value.length==0){
      alert("Falta apellido")
      document.fvalida.nombre.focus()
      return 0;
  }

  if (document.fvalida.interes.selectedIndex==0){
    alert("Seleccione un genero")
    document.fvalida.interes.focus()
    return 0;
}

var checkbox = document.getElementById('test');
checkbox.addEventListener("change", validaCheckbox, false);
  
function validaCheckbox(){
  var checked = checkbox.checked;
  if(checked){
    alert('checkbox esta seleccionado');
  }
}



}

    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
  }
  */