let xmlAjax = new XMLHttpRequest(); // creo un nuevo objeto de llamada AJAX
let art = document.getElementsByTagName('article')[0]; // Obtengo el 'article' de la página

/**
 * Indico la ubicacion el fichero XML del que extraeremos la información de los modulos e
 * indico el metdodo de petición AJAX a realizar
 */
xmlAjax.open("GET", "./src/xml/DAM.xml", true);
xmlAjax.send(); // Invoco la llamada AJAX

/*
 * Cada vez que el estado de la petición cambie 
 */
xmlAjax.onreadystatechange = function () {
    /*
     * si el estado de la peticion sea 4 (Peticion Realizada) y el codigo de respuesta HTTP sea 200 (Petición realizada correctamente)
     */
    if (this.readyState == 4 && this.status == 200) {
        let resXML = this.responseXML.getElementsByTagName('dam'); // Obtengo, de la respouesta de la petición AJAX el contenido del documento XML
        let cursos = resXML[0].childNodes[1].childNodes; // Obtengo del contenido del XML el conjunto de los Cursos
        let section_1 = document.createElement('section'); // Declaro un nuevo elemento HTML 'section'
        let span_1 = document.createElement('span'); // Declaro un nuevo elemento HTML 'span'

        let nombre = resXML[0].getAttribute('nombre'); // Obtengo el atributo nombre del Raiz del XML

        art.appendChild(section_1); // Agrego el nuevo 'section' dentro del article del documento
        section_1.appendChild(span_1);// Agrego el nuevo 'span' dentro del section inculido en el Article

        section_1.classList.add('col','s12','car-panel','teal','z-depth-2'); // Añado estilo al nuevo 'section'
        span_1.classList.add('white-text');// Añado estilo al nuevo 'span'

        span_1.innerHTML = nombre; // Incrusto el atributo nombre onbtenido del raiz del XML en el nuevo 'span'

        /*
         * Leo todos los elementos hijos de 'cursos'
         */
        cursos.forEach(curso => { // Por cada curso
            /*
             * Si el nombre del nodo no es '#text' el nodo corresponde con un curso por lo que...
             */
            if (curso.nodeName != '#text') {
                let nombre = curso.getAttribute('nombre'); // Obtengo el atributo 'nombre'
                let modulos = curso.childNodes[1].childNodes; // Obtengo los hijos del hijo 'modulos'
                let i = 0; // Declaro una variable contador para contar el numero de elementos que vamos añadiendo al HTML

                let section_2 = document.createElement('section'); // Creao un nuevo elemento 'section' 
                let div_1 = document.createElement('div'); // Creo un nuevo elemento 'div'
                let div_2 = document.createElement('div'); // Creo un nuevo elemento 'div'
                let span_2 = document.createElement('span'); // Creo un nuevo elemento 'span'
                
                art.appendChild(section_2); // Agrego el nuevo 'section' dentro del article del documento
                section_2.appendChild(div_1); // Agrego el nuevo 'div' dentro del 'section' inculido en el 'article'
                div_1.appendChild(div_2); // Agrego el nuevo 'div' dentro del 'div' inculido en el 'section'
                div_2.appendChild(span_2); // Agrego el nuevo 'span' dentro del 'div' inculido en el 'div'

                section_2.classList.add('col','s6','pt-1'); // Añado estilo al nuevo 'section'
                div_1.classList.add('pt-1'); // Añado estilo al nuevo 'div'
                div_2.classList.add('col','s12','car-panel','teal','z-depth-3'); // Añado estilo al nuevo 'div'
                span_2.classList.add('white-text'); // Añado estilo al nuevo 'span'

                span_2.innerHTML = nombre; // Incrusto el atributo 'nombre' onbtenido del nodo 'curso' en el nuevo 'span'

                /*
                 * Leo todos los hijos de 'modulos'
                 */
                modulos.forEach(modulo => { // Por cada modulo
                    /*
                     * Si el nombre del nodo no es '#text' el nodo corresponde con un curso por lo que...
                     */
                    if (modulo.nodeName != '#text') {
                        id = modulo.getAttribute('id'); // Obtengo el atributo 'id'
                        nombre = modulo.getAttribute('nombre'); // Obtengo el atributo 'nombre'
                        /*
                         * Obtengo el atributo 'contenidos' y lo desgrano en elementos individuales dentro de un Array
                         * tomando por separador el caracter ';'
                         */
                        contenidos = modulo.getAttribute('contenido').split(';');
                        let x = 1; // Declaro una variable contador para contar el numero de elementos que vamos añadiendo al HTML

                        let div_3 = document.createElement('div'); // Creo un nuevo elemento 'div'
                        let div_4 = document.createElement('div'); // Creo un nuevo elemento 'div'
                        let span_3 = document.createElement('span'); // Creo un nuevo elemento 'span'
                        let div_5 = document.createElement('div'); // Creo un nuevo elemento 'div'
                        
                        section_2.appendChild(div_3); // Agrego el nuevo 'div' dentro del segundo 'section' inculido en el 'article'
                        div_3.appendChild(div_4); // Agrego el nuevo 'div' dentro del segundo 'section' inculido en el 'article'
                        div_4.appendChild(span_3); // Agrego el nuevo 'div' dentro del 'div' inculido en el segundo 'section'

                        /**
                         * Leo todos los elementos del array contenidos
                         */
                        contenidos.forEach(contenido => { // Por cada contenido
                            let span_4 = document.createElement('span'); // Creo un nuevo elemento 'span'

                            div_3.appendChild(div_5); // Agrego el nuevo 'div' dentro del 'div' inculido en el 'div' del segundo 'section'
                            div_5.appendChild(span_4); // Agrego el nuevo 'span' dentro del quinto 'div'

                            div_5.classList.add('car-panel','green','pb-2'); // Agrego estilo al quinto 'div'
                            span_4.classList.add('white-text','ps-5'); // Añado estilo al nuevo 'span'

                            span_4.innerHTML = x + 'º- ' + contenido + '<br>' // Incrusto el atributo 'contenido' onbtenido del array de contenidos en el nuevo 'span'

                            x++; // Sumo uno al contador
                        })

                        /*
                         * Si el elemento 'modulo' añadido es el primero de todos
                         */
                        if (i == 0) {
                            div_3.classList.add('p-2_rem'); // Añado un padding top de 2rem
                        } else {
                            div_3.classList.add('pt-1');  // Añado un padding top de 0.25rem
                        }

                        div_4.classList.add('col','s12','car-panel','teal','z-depth-5','mb-2'); // Añado estilo al cuarto 'div'
                        span_3.classList.add('white-text'); // Añado estilo al tercer 'span'

                        span_3.innerHTML = id + 'º- ' + nombre; // insertamos el atributo 'nombre' e 'id' obtenidos en el tercer 'span'

                        i++; // Sumo uno al contador
                    }
                });
            }
        });
    }
};