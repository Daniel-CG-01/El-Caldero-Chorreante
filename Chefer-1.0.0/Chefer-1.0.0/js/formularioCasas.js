//Formulario Casas
document.getElementById("casas").addEventListener("submit", function (e) {
    e.preventDefault(); //Evita que se recargue la página

    const boton = document.getElementById("btnCasas");

    const form = e.target;

    //Lista de nombres de preguntas esperadas
    const preguntas = ["p1", "p2", "p3", "p4", "p5"];

    //Verifica si cada grupo tiene una opción seleccionada
    let todasRespondidas = true;

    for (let name of preguntas) {
        const seleccion = form.querySelector(`input[name="${name}"]:checked`);
        if (!seleccion) {
            todasRespondidas = false;
            break;
        }
    }

    if (!todasRespondidas) {
        alert("Por favor, es necesario que respondas todas las preguntas antes de enviar");
        return;
    }

    //Objeto para contar puntos por casa
    const puntuacion = {
        Gryffindor: 0,
        Slytherin: 0,
        Hufflepuff: 0,
        Ravenclaw: 0
    };

    const respuestas = document.querySelectorAll("input[type='radio']:checked");

    //Sumamos puntos a cada casa
    respuestas.forEach((respuesta) => {
        const casa = respuesta.value;
        if (puntuacion[casa] !== undefined) {
            puntuacion[casa]++;
        }
    });

    //Encontramos la casa con más puntos
    const casaGanadora = Object.entries(puntuacion).reduce((a, b) => (a[1] >= b[1] ? a : b))[0];

    setTimeout(() => {
        boton.textContent = "Enviado"
    }, 2000);

    //Mostramos el resultado
    alert("¡Enhorabuena, has sido asignado a la casa " + casaGanadora + "!");
});