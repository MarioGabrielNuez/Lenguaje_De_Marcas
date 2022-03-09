/**
 * Simulacro de examen DAM.
 * Enunciado:
 * Realiza la validación del formulario.
 * 
 * Parte 1.
 * Crea un evento keyup que realice la validacion del email comprobando los siguientes elementos
 * -  Valor vacío 
 * -  Valor con longitud menor que 15
 * -  Valor con longitud mayor que 3
 * -  Valor correcto.
 * 
 * En los tres primeros, se debe dar un mensaje de error en color rojo y cambiar el color del input a rojo.
 * En el último, se debe cambiar el color del input a verde y en cuanto al mensaje ocultarlo o mostrar mensaje en verde.
 * 
 * Parte 2.
 * Crea un evento keyup que realice la validacion del password comprobando los siguientes elementos
 * -  Valor vacío 
 * -  Valor con longitud menor que 15
 * -  Valor con longitud mayor que 3
 * -  Valor con mayuscula (ver ayuda)
 * -  Valor con numero (ver ayuda)
 * -  Valor con minuscula (ver ayuda)
 * -  Valor correcto.
 * 
 * En los seis primeros, se debe dar un mensaje de error en color rojo y cambiar el color del input a rojo.
 * En el último, se debe cambiar el color del input a verde y en cuanto al mensaje ocultarlo o mostrar mensaje en verde.
 * 
 * Parte 3.
 * Crea un evento click que realice la validacion completa del formulario.
 * - Si el checkbox esta seleccionado y email y password son correctos, mostrar un alert con mensaje de formulario correcto.
 * - Si el checkbox esta deseleccionado o el email o password no son correctos, no mostrar alerta (puesto que hay elementos en rojo).
 * 
 * SECCION DE AYUDA.
 * 1. Para la realicacion de eventos, utilizar addEventListener(evento, funcion);
 * 2. Para cambiar elementos css, utilizar style.CAMBIO.
 * 3. Para la mayuscula, minulscula y numero utilizar la funcion matches (devuelve true o false si coincide o no coincide) de javascript sobre el elemento que se quiere comprobar unido por punto (ELEMENTO.matches(patron)). Tener en cuenta estos patrones:
 * MAYUSCULA ------> /[A-Z]/g
 * MINUSCULA ------> /[a-z]/g
 * NUMERO ---------> /[0-9]/g
 * 4. Para obtener el valor del checkbox en caso de estar o no seleccionado, utilzar ELEMENTO.checked = true|false
 */

/*
 * Declaración de las variables
 */
let email = document.getElementById("email");
let password = document.getElementById("password");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let btn = document.getElementById("btn");
let checkbox = document.getElementById("checkbox");
let passwordBien = 0;
let emailBien = 0;

/*
 * Parte 1
 * Crea un evento keyup que realice la validacion del email
 */
email.addEventListener("keyup", checkEmail); // Espera a que el usuario suelte la tecla y entonces ejecuta checkEmail

/*
 * Parte 2
 * Crea un evento keyup que realice la validacion del password
 */
password.addEventListener("keyup", checkPassword); // Espera a que el usuario suelte la tecla y entonces ejecuta checkPassword

/*
 * Parte 3
 * Crea un evento click que realice la validacion completa del formulario
 */
btn.addEventListener("click", checkForm); // Espera a que el usuario clicke el boton y entonces ejecuta checkForm

/**
 * Parte 1
 * Crea un evento keyup que realice la validacion del email
 */
function checkEmail(){
    /*
     * Valor vacío
     */
    if (email.value == ""){
        email.style.color = "red"; // cambia color de texto a rojo en el input del email
        emailError.style.color = "red"; // cambia color de texto a rojo en el mensaje del email
        emailError.innerHTML = "El Email no puede estar vacio"; // cambia el texto del mensaje del email
        emailBien = false; // establecemos a false el Boolean que indica si el email esta o no bien

    /*
     * Valor con longitud menor que 15
     */
    } else if (email.value.length > 15) {
        email.style.color = "red"; // cambia color de texto a rojo en el input del email
        emailError.style.color = "red"; // cambia color de texto a rojo en el mensaje del email
        emailError.innerHTML = "El Email no tener una longitud mayor que 15"; // cambia el texto del mensaje del email
        emailBien = false; // establecemos a false el Boolean que indica si el email esta o no bien
    
    /*
     * Valor con longitud mayor que 3
     */
    } else if (email.value.length < 3) {
        email.style.color = "red"; // cambia color de texto a rojo en el input del email
        emailError.style.color = "red"; // cambia color de texto a rojo en el mensaje del email
        emailError.innerHTML = "El Email no tener una longitud menor que 3"; // cambia el texto del mensaje del email
        emailBien = false; // establecemos a false el Boolean que indica si el email esta o no bien
    
    /*
     * si cumple las tres condiciones anteriores
     */
    } else {
        email.style.color = "green"; // cambia color de texto a verde en el input del email
        emailError.style.color = "green"; // cambia color de texto a verde en el mensaje del email
        emailError.innerHTML = "Correcto"; // cambia el texto del mensaje del email
        emailBien = true; // establecemos a true el Boolean que indica si el email esta o no bien
    }
}

/**
 * Parte 2
 * Crea un evento keyup que realice la validacion del password
 */
function checkPassword(){
    /*
     * Valor vacío
     */
    if (password.value == ""){
        password.style.color = "red"; // cambia color de texto a rojo en el input del password
        passwordError.style.color = "red"; // cambia color de texto a rojo en el mensaje del password
        passwordError.innerHTML = "El password no puede estar vacio"; // cambia el texto del mensaje del password
        passwordBien = false; // establecemos a false el Boolean que indica si el password esta o no bien

    /*
     * Valor con longitud menor que 15
     */
    } else if (password.value.length > 15) {
        password.style.color = "red"; // cambia color de texto a rojo en el input del password
        passwordError.style.color = "red"; // cambia color de texto a rojo en el mensaje del password
        passwordError.innerHTML = "El password no tener una longitud mayor que 15"; // cambia el texto del mensaje del password
        passwordBien = false; // establecemos a false el Boolean que indica si el password esta o no bien
    
    /*
     * Valor con longitud mayor que 3
     */
    } else if (password.value.length < 3) {
        password.style.color = "red"; // cambia color de texto a rojo en el input del password
        passwordError.style.color = "red"; // cambia color de texto a rojo en el mensaje del password
        passwordError.innerHTML = "El password no tener una longitud menor que 3"; // cambia el texto del mensaje del password
        passwordBien = false; // establecemos a false el Boolean que indica si el password esta o no bien

    /*
     * Valor con mayuscula
     */
    } else if (password.value.match(/[A-Z]/g) == null) {
        password.style.color = "red"; // cambia color de texto a rojo en el input del password
        passwordError.style.color = "red"; // cambia color de texto a rojo en el mensaje del password
        passwordError.innerHTML = "El password Debe contener mayusculas, minusculas y numeros"; // cambia el texto del mensaje del password
        passwordBien = false; // establecemos a false el Boolean que indica si el password esta o no bien
    
    /*
     * Valor con minuscula
     */
    } else if (password.value.match(/[a-z]/g) == null) {
        password.style.color = "red"; // cambia color de texto a rojo en el input del password
        passwordError.style.color = "red"; // cambia color de texto a rojo en el mensaje del password
        passwordError.innerHTML = "El password Debe contener mayusculas, minusculas y numeros"; // cambia el texto del mensaje del password
        passwordBien = false; // establecemos a false el Boolean que indica si el password esta o no bien
    
    /*
     * Valor con numeros
     */
    } else if (password.value.match(/[0-9]/g) == null) {
        password.style.color = "red"; // cambia color de texto a rojo en el input del password
        passwordError.style.color = "red"; // cambia color de texto a rojo en el mensaje del password
        passwordError.innerHTML = "El password Debe contener mayusculas, minusculas y numeros"; // cambia el texto del mensaje del password
        passwordBien = false; // establecemos a false el Boolean que indica si el password esta o no bien
    
    /*
     * Si cumple las tres condiciones anteriores
     */
    } else {
        password.style.color = "green"; // cambia color de texto a verde en el input del password
        passwordError.style.color = "green"; // cambia color de texto a verde en el mensaje del password
        passwordError.innerHTML = "Correcto"; // cambia el texto del mensaje del password
        passwordBien = true; // establecemos a true el Boolean que indica si el password esta o no bien 
    }
}

/*
 * Parte 3
 * Crea un evento click que realice la validacion completa del formulario
 */
function checkForm(){ // Declara función checkForm()
    if (passwordBien && emailBien){ // Si el password y el Email son correctos
        if (checkbox.checked){ // si el checkbox de las condiciones esta seleccionado
            checkboxError.style.color = "green"; // cambia color de texto a verde en el mensaje del checkBox
            checkboxError.innerHTML = "correcto"; // cambia el texto del mensaje del checkBox
            alert("Formulario correcto"); // Mostramos mensaje.
        } else { // si el checkbox de las condiciones no esta seleccionado
            checkboxError.style.color = "red"; // cambia color de texto a rojo en el mensaje del checkBox
            checkboxError.innerHTML = "Debes aceptar las condiciones"; // cambia el texto del mensaje del checkBox
        }
    }
}