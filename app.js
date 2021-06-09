let base_preguntas = readText("base-preguntas.json")            // El texto de la base de preguntas lo almacenamos en una variable
let interprete_bp = JSON.parse(base_preguntas)                  // Hacemos un interprete para la base de preguntas y lo guardamos en una variable
let pregunta
let posibles_respuestas
let btn_correspondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]

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
    style("imagen").objectFit = pregunta.object_fit             // Modificamos el estilo "object-fit" de la imagen y le colocamos el que viene del .json
    
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
    //     style("imagen").width = "100%"
    // } else {
    //     style("imagen").height = "0px"
    //     style("imagen").width = "0px"
    // }
}

// Mediante ID seleccionamos los botones y los colocamos en un arreglo
// Con esto emparejaremos las respuestas con las acciones de los botones
let btns = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]

// Desordena las respuestas en los botones
function desordenarRespuestas(pregunta) {
    // Este arreglo contiene todas las psobiles respuestas
    posibles_respuestas = [
        pregunta.respuesta,
        pregunta.incorrecta1,
        pregunta.incorrecta2,
        pregunta.incorrecta3
    ]

    // Desordena el arreglo
    posibles_respuestas.sort(() => Math.random() - 0.5)

    select_id("btn1").innerHTML = posibles_respuestas[0]
    select_id("btn2").innerHTML = posibles_respuestas[1]
    select_id("btn3").innerHTML = posibles_respuestas[2]
    select_id("btn4").innerHTML = posibles_respuestas[3]
}

// Esta funcion se llama al hacer click en cada uno de los botones
// Recibe un indice para emparejar las respuestas con los botones
function oprimir_btn(i) {
    if (posibles_respuestas[i] == pregunta.respuesta) {     // Si la posible respuesta es igual a la respuesta a la pregunta
        btn_correspondiente[i].style.background = "lightgreen"   // Si la respuesta es correcta, le asignamos un color verde de fondo
    } else {
        btn_correspondiente[i].style.background = "pink"     // Si la respuesta es incorrecta, le asignamos un color rojo de fondo
    }
    setTimeout(() => {                                      // Cada tres segundos aplicamos la funcion que reincia los colores
        reiniciar()
    }, 3000);
}

// Cuando se reinicia, los botones vuelven a  tener fondo blanco y cambia de pregunta
function reiniciar() {
    for (const btn of btn_correspondiente) {                // Recorre todos los botones y les asigna un background blanco
        btn.style.background = "white"
    }
    escogerPreguntaAleatoria()
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