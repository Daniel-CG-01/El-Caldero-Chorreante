//Formulario Casas
document.getElementById("casas").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    //Objeto para contar puntos por casa
    const puntuacion = {
        Gryffindor: 0,
        Slytherin: 0,
        Hufflepuff: 0,
        Ravenclaw: 0
    };

    //Seleccionamos todas las respuestas marcadas
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

    //Mostramos el resultado
    alert("¡Enhorabuena, has sido asignado a la casa " + casaGanadora + "!");
});