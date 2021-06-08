let base_preguntas = readText("base-preguntas.json")            // El texto de la base de preguntas lo almacenamos en una variable
let interprete_bp = JSON.parse(base_preguntas)                  // Hacemos un interprete para la base de preguntas y lo guardamos en una variable

escogerPreguntaAleatoria()

// Escoge una pregunta aleatoria
function escogerPreguntaAleatoria() {
    escogerPregunta(Math.floor(Math.random() * interprete_bp.length))
}



// Escoge una pregunta de la base de datos 
function escogerPregunta(n) {
    pregunta = interprete_bp[n]                                 // Tomamos una de las preguntas con el indice y lo guardamos en una variable
    select_id("categoria").innerHTML = pregunta.categoria       // Mediante el ID seleccionamos el objeto "categoria" y en su html le colocamos la categoria que viene del .json
    select_id("pregunta").innerHTML = pregunta.pregunta         // Mediante el ID seleccionamos el objeto "pregunta" y en su html le colocamos la pregunta que viene del .json
    select_id("imagen").setAttribute("src", pregunta.imagen)    // Mediante el ID seleccionamos el objeto imagen y le cambiamos el atributo src por el que viene del .json
    // style("imagen").objectFit = pregunta.objectFit           // Modificamos el estilo "object-fit" de la imagen y le colocamos el que viene del .json
    style("imagen").objectFit = pregunta.object_fit
    
    // Mediante el ID seleccionamos los botones y les asignamos la pregunta correcta y las incorrectas
    select_id("btn1").innerHTML = pregunta.respuesta
    select_id("btn2").innerHTML = pregunta.incorrecta1
    select_id("btn3").innerHTML = pregunta.incorrecta2
    select_id("btn4").innerHTML = pregunta.incorrecta3

    // Filtro para las preguntas que no tienen imagen
    // Si la pregunta desde .json tiene imagen, se muestra, si no lo tiene, no se muestra 
    if(pregunta.imagen) {
        style("imagen").display = "block"
    } else {
        style("imagen").display = "none"
    }

    // if(pregunta.imagen) {
    //     style("imagen").height = "200px"
    // } else {
    //     style("imagen").height = 0
    // }
}

// Selecciona un objeto segun su ID
function select_id(id) {
    return document.getElementById(id)
}

// Obtiene el CSS del objeto segun el ID
function style(id) {
    return select_id(id).style
}

// Lee texto en una ruta local
function readText(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}