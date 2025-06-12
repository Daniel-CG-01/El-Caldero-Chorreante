document.getElementById("edad").addEventListener("input", function () {
    document.getElementById("valorEdad").textContent = this.value;
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const email = document.getElementById("email").value.trim();
        const contraseña = document.getElementById("contraseña").value;
        const edad = parseInt(document.getElementById("edad").value);
        const casillaTexto = document.getElementById("casillaTexto").checked;

        //Validaciones básicas
        if (nombre === "" || apellidos === "" || email === "" || contraseña === "") {
            alert("Por favor, es necesario completar todos los campos");
            return;
        }

        //Validar email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido");
            return;
        }

        if (!contraseña.length === 8) {
            alert("Por favor, introduce una contraseña con 8 caracteres");
            return;
        }

        if (edad < 12) {
            alert("¡Importante! Debes tener más de 12 años para registrarte");
            return;
        }

        if (!casillaTexto) {
            alert("¡Importante! Debes aceptar los términos y condiciones");
            return;
        }

        setTimeout(() => {
            btnRegistro.textContent = "Registrado"
        }, 2000);

        //Si todo está correcto
        alert("Registro completado con éxito. ¡Bienvenido/a a El Caldero Chorreante!");
        form.reset();
        document.getElementById("valorEdad").textContent = "0";
    });
});