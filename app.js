escogerPregunta()


function escogerPregunta() {
    let base_preguntas = readText("questions-db.json")  // El texto de la base de preguntas lo almacenamos en una variable
    let interprete_bp = JSON.parse(base_preguntas)      // Hacemos un interprete para la base de preguntas
    pregunta = interprete_bp[n]                         // Tomamos una de las preguntas con el indice
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