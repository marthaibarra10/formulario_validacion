/* function ingresar(){
    console.log("Ingresó un nuevo usuario");
} */

//COMO OBTENER LA INFORMACION QUE SE INGRESA A UN FORMULARIO Y MOSTRARLO EN CONSOLA
/* function ingresar(){
    const valorUsuario = document.getElementById('user').value;
    const valorEmail= document.getElementById('email').value;
    const valorPass = document.getElementById('password').value;

    const object = {
        user : valorUsuario,
        email : valorEmail,
        password : valorPass
    }

    console.log(object);
}  */
//COMO OBTENER LA INFORMACION QUE SE INGRESA A UN FORMULARIO Y MOSTRARLO EN CONSOLA

//----->>>>>>>>>>>>> EJERCICIO SELECCION DOM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<-----------------
//Traer elementos por etiquetas o tags
/* var elementosP = document.getElementsByTagName("p"); */
//En la consola se puede elegir un elemento exacto con su ubicaciónpor ejemplo: elementosP[0]
//En la consola se puede mandar a traer lo que contiene el parrafo con lo siguiente: elementosP.innerHTML
//En la consola se puede actualizar solo del lado del cliente lo que contiene el parrafo con lo siguiente: elementosP[0].innerHTML = "michis";

//Traer elementos por Id
/* var segundoParrafo = document.getElementById("NombredelID"); */

//Como hacer dinámico un elemento por ejemplo agregar un comentario en un blog
//Este ejemplo será agregando un subtitulo por medio de javascript a HTML
//1.- Crear un elemento
var elemento = document.createElement("h3");
//2.- Crear un nodo de texto
var contenido = document.createTextNode("Formulario con validación");
//3.- Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//4.- Agregar atributos al elemento
elemento.setAttribute("align", "center");
//5.- Agregar al elemento al documento 
document.getElementById("subtitulo").appendChild(elemento);



//-----***************   EJERCICIO MANIPULACION DOM **************-----------------
//AGREGAR NODO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/* //Modificar el contenido de los elementos   
let primerElemento = document.getElementById("primero");
//De este modo accedemos al texto para modificarlo
//También se puede usar:::::  primerElemento.textContent = "Nuevo <b>nuevo texto</b>"; //Pero esta forma -
//muestra las etiquetas html y se usa mas en formularios por que es mas seguro 
primerElemento.innerHTML = "Primera parte del acuerdo <b>leer bien</b>";
 */

//REEMPLAZAR NODO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//EJERCICIO PARA SUSTITUIR O ELIMINAR UN ELEMENTO CREOOOOOOOOOOO
let dato = document.createElement("li");
let con = document.createTextNode("Primera parte del acuerdo con DOM");
//Aquí unimos lo que hay en li con lo que queremos meter es decir la variable "con"
dato.appendChild(con);
//Aqui le decimos en cual de las posiciones de li queremos meter el nuevo date
let padre = document.getElementsByTagName("li")[0].parentNode;
let referencia = document.getElementsByTagName("li")[0];
//Aqui se sustituye usando dos parametros el que queremos cambiar "dato" y por cual lo queremos cambiar "referencia"
padre.replaceChild(dato, referencia);


//ELIMINAR NODO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Ojo se está usando el codigo de arriba, arriba está la variable referencia
//padre.removeChild(referencia);


// EVENTOS EVENTOS EVENTOS EVENTOS EVENTOS EVENTOS EVENTOS EVENTOS EVENTOS 
