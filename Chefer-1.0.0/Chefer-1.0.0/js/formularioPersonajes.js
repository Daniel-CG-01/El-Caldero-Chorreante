const btnDescubrir = document.getElementById('btnDescubrirPersonaje');
const resultadoDiv = document.getElementById('resultado');
const harryForm = document.getElementById('harryForm');

let personajesData = [];

fetch('json/personajes_harry_potter_corregido.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        personajesData = data;
        console.log('Personajes cargados:', personajesData); // Para depuración
    })
    .catch(error => {
        console.error('Error al cargar los personajes:', error);
        resultadoDiv.innerHTML = `<p style="color:red;">Error al cargar los personajes para el quiz: ${error.message}</p>`;
    });

btnDescubrir.addEventListener('click', function (event) {
    event.preventDefault(); //Previene el envío del formulario por defecto

    if (personajesData.length === 0) {
        resultadoDiv.innerHTML = '<p>Cargando personajes, por favor espera...</p>';
        return;
    }

    //Obtener los valores seleccionados del formulario
    const valorSeleccionado = harryForm.elements.valor.value;
    const trabajoSeleccionado = harryForm.elements.trabajo.value;
    const problemaSeleccionado = harryForm.elements.problema.value;

    //Validación básica: Comprobar que todas las preguntas estén respondidas
    if (!valorSeleccionado || !trabajoSeleccionado || !problemaSeleccionado) {
        resultadoDiv.innerHTML = '<p style="color:orange;">Por favor, responde todas las preguntas para descubrir tu personaje.</p>';
        return;
    }

    //Lógica para encontrar un personaje con COINCIDENCIA EXACTA
    let personajeEncontrado = null; //Variable para almacenar el personaje si se encuentra una coincidencia

    //Iterar sobre todos los personajes para encontrar uno que coincida exactamente
    for (let i = 0; i < personajesData.length; i++) {
        const personaje = personajesData[i];

        //Comprobar si las TRES respuestas clave del personaje coinciden con las selecciones del usuario
        if (personaje.respuesta_clave.valor === valorSeleccionado &&
            personaje.respuesta_clave.trabajo === trabajoSeleccionado &&
            personaje.respuesta_clave.problema === problemaSeleccionado) {

            personajeEncontrado = personaje; // Hemos encontrado una coincidencia exacta
            break; //Salir del bucle, ya que solo necesitamos el primero que coincida
        }
    }

    //Mostrar el resultado basado en si se encontró un personaje exacto
    if (personajeEncontrado) {
        resultadoDiv.innerHTML = `
            <div class="card text-center bg-secondary text-white mx-auto mt-4" style="max-width: 400px;">
                <div class="card-body">
                    <h4 class="card-title text-primary">¡Eres... ${personajeEncontrado.nombre}!</h4>
                    <img src="${personajeEncontrado.imagen}" class="img-fluid rounded-circle mx-auto my-3" alt="${personajeEncontrado.nombre}" style="width: 150px; height: 150px; object-fit: cover;">
                    <p class="card-text"><strong>Casa:</strong> ${personajeEncontrado.casa}</p>
                    <p class="card-text small text-muted">Rasgos: ${personajeEncontrado.rasgos.join(', ')}</p>
                    <p class="card-text small text-muted mt-3">Basado en tus respuestas:</p>
                    <ul class="list-unstyled small text-muted">
                        <li>Valor: <em>${valorSeleccionado}</em></li>
                        <li>Forma de trabajo: <em>${trabajoSeleccionado}</em></li>
                        <li>Forma de enfrentar problemas: <em>${problemaSeleccionado}</em></li>
                    </ul>
                </div>
            </div>
        `;
    } else {
        //Mensaje si no se encuentra ninguna coincidencia exacta
        resultadoDiv.innerHTML = '<p style="color:white;">No pudimos encontrar un personaje que encaje **exactamente** con todas tus respuestas. ¡Intenta combinar otras opciones!</p>';
    }

    setTimeout(() => {
        btnDescubrir.textContent = "Enviado"
    }, 2000);
});