
const buttonListener = document.querySelector("button");
var chk = document.getElementById("flexRadioDefault1");
chk.addEventListener("change", action, false);

var chk2 = document.getElementById("flexRadioDefault2");
chk2.addEventListener("change", action, false);

function action(){
    const inputName = document.querySelector(".nombre");
    const inputApellido = document.querySelector(".apellido");
    var elemento = document.forms["fvalida"]["checkbox"].checked;
    //var elemento2 = document.forms["fvalida"]["flexRadioDefault"].checked;
    var elemento2 = chk.checked;
    var elemento3 = chk2.checked;
    
    if(inputName.value.length==0){
        alert("Agregue el nombre");
        //document.inputName.value="";
        document.inputName.focus();
        return false;
    }else{
        if (inputApellido.value.length==0){
            alert("Falta apellido");
            //document.inputApellido.value="";
            document.inputApellido.focus();
            return false;
        }else{
            if(elemento2 == false && elemento3 == false){
                alert("Atención le falta seleccionar el radiobutton");
            }else{
                if(elemento == false){
                    alert("Selecciona el checkbox!!!");
                }else{
                    alert("¡Formulario enviado!");
                }
            } 
        }
    }
}

buttonListener.addEventListener("click", action);



