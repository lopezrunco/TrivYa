window.onload = function () {
    base_preguntas = readText("base-preguntas.json")            // El texto de la base de preguntas lo almacenamos en una variable
    interprete_bp = JSON.parse(base_preguntas)                  // Hacemos un interprete para la base de preguntas y lo guardamos en una variable
    escogerPreguntaAleatoria()                                  // Al cargar la pagina, escoge una pregunta nueva
}

let pregunta
let posibles_respuestas
// Hacemos un array con los botones, seleccionandolos mediante el ID
btn_correspondiente = [     
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]
npreguntas = []

let preguntas_hechas = 0
let preguntas_correctas = 0

// Escoge una pregunta aleatoria
function escogerPreguntaAleatoria() {
    let n = Math.floor(Math.random() * interprete_bp.length)        // Recorre todo el largo de la base de preguntas .json y elige una pregunta, la almacena en la variable n
    // n = 0

    while (npreguntas.includes(n)) {                                // Itera por las preguntas
        n++
        if (n >= interprete_bp.length) {
            n = 0
        }
        if (npreguntas.length == interprete_bp.length) {
            npreguntas = []
        }
    }
    npreguntas.push(n)
    preguntas_hechas++          // Le suma un valor a las preguntas ya hechas

    escogerPregunta(n)          // Escoge una nueva pregunta en el indice arrojado
}

// Escoge una pregunta desde el .json
function escogerPregunta(n) {
    pregunta = interprete_bp[n]                                             // Tomamos una de las preguntas con el indice y lo guardamos en una variable
    select_id("categoria").innerHTML = pregunta.categoria                   // Mediante el ID seleccionamos el objeto "categoria" y en su html le colocamos la categoria que viene del .json
    select_id("pregunta").innerHTML = pregunta.pregunta                     // Mediante el ID seleccionamos el objeto "pregunta" y en su html le colocamos la pregunta que viene del .json
    select_id("numero").innerHTML = n                                       // Mediante el ID seleccionamos el objeto "numero" y en su html le colocamos el numero de la pregunta que viene del .json
    let pc = preguntas_correctas
    if (preguntas_hechas > 1) {
        select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1)  // Si las preguntas hechas es mayor a 1, tomamos el elemento HTML "puntaje" y le asignamos el numero de preguntas correctas y el numero de preguntas correctas menos 1  
    } else {
        select_id("puntaje").innerHTML = ""                                 // Si la condicion no se cumple, limpia el valor del elemento HTML "puntaje"
    }

    style("imagen").objectFit = pregunta.objectFit;                         // Modificamos el estilo "object-fit" de la imagen y le colocamos el que viene del .json
    desordenarRespuestas(pregunta)
    // Filtro para las preguntas que no tienen imagen
    if (pregunta.imagen) {                                                  // Si la pregunta desde .json tiene imagen, se muestra, si no lo tiene, no se muestra 
        select_id("imagen").setAttribute("src", pregunta.imagen)            // Si hay imagen, mediante el ID seleccionamos el objeto imagen y le cambiamos el atributo src por el que viene del .json
        style("imagen").height = "200px"
        style("imagen").width = "100%"
    } else {
        style("imagen").height = "0px"                                      // Si no hay imagen, ocultamos el elemento imagen
        style("imagen").width = "0px"
        setTimeout(() => {
            select_id("imagen").setAttribute("src", "")
        }, 500);
    }
}

// Desordena las respuestas en los botones
function desordenarRespuestas(pregunta) {
    posibles_respuestas = [                                    // Este arreglo contiene todas las posibles respuestas obtenidas desde el .json
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

let suspender_botones = false

// Esta funcion se llama al hacer click en cada uno de los botones
// Recibe un indice para emparejar las respuestas con los botones
function oprimir_btn(i) {
    if (suspender_botones) {
        return
    }
    suspender_botones = true

    if (posibles_respuestas[i] == pregunta.respuesta) {             // La condiciones: si la posible respuesta es igual a la respuesta a la pregunta...
        preguntas_correctas++                                       // Agregar un valor a las preguntas correctas
        btn_correspondiente[i].style.background = "radial-gradient(circle, rgba(0,216,0,1) 0%, rgba(136,255,136,1) 100%)"           // Si la respuesta es correcta, le asignamos un color verde de fondo
    } else {
        btn_correspondiente[i].style.background = "radial-gradient(circle, rgba(255,57,57,1) 0%, rgba(255,115,115,1) 100%)"         // Si la respuesta es incorrecta, le asignamos un color rojo de fondo
    }
    for (let j = 0; j < 4; j++) {                                   // Este loop chequea si las posibles_respuestas coinciden con la respuesta a la pregunta
        if (posibles_respuestas[j] == pregunta.respuesta) {
            btn_correspondiente[j].style.background = "radial-gradient(circle, rgba(0,216,0,1) 0%, rgba(136,255,136,1) 100%)"       // Si se cumple la condicion, le añadimos un background verde al boton
            break
        }
    }

    setTimeout(() => {                                              // Cada tres segundos aplicamos una funcion que reincia los colores
        reiniciar()
        suspender_botones = false
    }, 3000);
}

// let p = prompt("numero")

// Cuando se reinicia, los botones vuelven a  tener fondo blanco y cambia de pregunta
function reiniciar() {
    for (const btn of btn_correspondiente) {                // Recorre todos los botones y les asigna un background blanco
        btn.style.background = "rgba(255, 255, 255, 0.1)"
    }
    escogerPreguntaAleatoria()                              // Escoge una nueva pregunta
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