datos();// Ejecutar todo

/**
 * Ejecucion principal
 */
function datos(){
    /**
     * Lectura e impresión del fichero TXT
     */
    parte_1();

    /**
     * Lectura del fichero JSON
     */
    let Jajax = new XMLHttpRequest(); // creo un nuevo objeto de llamada AJAX
    Jajax.onload = function () {// cuando la llamada ajax se produzca
        let json = JSON.parse(Jajax.responseText);// convierte los datos en JSON
        parte_2(json);// Creamos las tarjetas de los trabajadores
        parte_3(json);// Creamos las tarjetas de las oficinas
    }
    
    /**
     * Indico la ubicacion el fichero JSON del que extraeremos la información de los trabajadores e
     * indico el metdodo de petición AJAX a realizar
     */
     Jajax.open("GET", "./json/trabajadores.json", true);
     Jajax.send(); // Invoco la llamada AJAX
}

/**
 * Lectura e impresión del fichero TXT
 */
function parte_1(){
    /**
     * Lectura del fichero TXT
     */
    let Tajax = new XMLHttpRequest(); // creo un nuevo objeto de llamada AJAX
    Tajax.onload = function() {// cuando la llamada ajax se produzca
        let txt = this.responseText;// obtenemos el texto
        document.getElementById("p").innerHTML = txt; // lo mostramos en el parrafo con id = "p"
    }

    /**
     * Indico la ubicacion el fichero JSON del que extraeremos la información de los trabajadores e
     * indico el metdodo de petición AJAX a realizar
     */
    Tajax.open("GET", "./descripcion.txt", true);
    Tajax.send(); // Invoco la llamada AJAX
}

/**
 * Creación de las tarjetas de los trabajadores
 * @param {*} datos 
 */
function parte_2(datos) {
    datos.forEach(element => { // para cada elemento del JSON
        if (!element.ubicacion) {// si el elemento no se corresponde con las ubicaciones de las oficinas.
            let div_1 = document.createElement('div'); // Creo un nuevo elemento 'div'
            let div_2 = document.createElement('div'); // Creo un nuevo elemento 'div'
            let div_3 = document.createElement('div'); // Creo un nuevo elemento 'div'

            div_1.classList.add("card","align-items-center", "m-3", "col", "w-30"); //Aplico estilo al nuevo div

            /**
             * inserto los datos correspondientes en el DIV
             */
            div_1.innerHTML = '<img src="./img/' + element.avatar + '" class="card-img-top w-50" alt="' + element.nombre + " " + element.apellidos + '">';
            
            div_2.classList.add("card-body"); //Aplico estilo al nuevo div

            /**
             * inserto los datos correspondientes en el DIV
             */
            div_2.innerHTML = '<h5 class="card-title">' + element.nombre + " " + element.apellidos + '</h5>';
            
            div_3.classList.add("text-start"); //Aplico estilo al nuevo div

            /**
             * inserto los datos correspondientes en el DIV
             */
            div_3.innerHTML = '<p class="card-text">Fecha de Nacimiento: ' + element.fecha_nacimiento + '<br>Contacto: <a href="mailto:' + element.correo + '">' + element.correo + '</a><br>Puesto: ' + element.puesto + '<br>Antigüedad: ' + element.antigüedad + '</p>';
            
            /**
             * colocamos los elementos generados en la página
             */
            div_2.appendChild(div_3);
            div_1.appendChild(div_2);
            document.getElementById('Employees_Cards').appendChild(div_1);
        }
    });
}

/**
 * Creación de las tarjetas de los trabajadores
 * @param {*} datos 
 */
function parte_3(datos) {
    datos.forEach(element => {// para cada elemento del JSON
        if (element.ubicacion) {// si el elemento se corresponde con las ubicaciones de las oficinas.
            element.ubicacion.forEach(element => {// para cada elemento de oficina
                let div_1 = document.createElement('div'); // Creo un nuevo elemento 'div'
                let div_2 = document.createElement('div'); // Creo un nuevo elemento 'div'
                let div_3 = document.createElement('div'); // Creo un nuevo elemento 'div'
    
                div_1.classList.add("card","align-items-center", "m-3", "col", "w-30"); //Aplico estilo al nuevo div
                
                div_2.classList.add("card-body"); //Aplico estilo al nuevo div

                /**
                 * inserto los datos correspondientes en el DIV
                 */
                div_2.innerHTML = '<h5 class="card-title">' + element.lugar + '</h5>';
                
                div_3.classList.add("text-start"); //Aplico estilo al nuevo div

                /**
                 * inserto los datos correspondientes en el DIV
                 */
                div_3.innerHTML = '<p class="card-text">' + element.descripcion + '</p>';
                
                /**
                 * colocamos los elementos generados en la página
                 */
                div_2.appendChild(div_3);
                div_1.appendChild(div_2);
                document.getElementById('Oficinas_Cards').appendChild(div_1); 
            });
        }
    });
}