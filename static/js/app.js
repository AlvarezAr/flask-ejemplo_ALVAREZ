// =================================
// MENÚ RESPONSIVE
// =================================

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("mostrar");
    }
}


// =================================
// MODO OSCURO
// =================================

function cambiarTema() {

    document.body.classList.toggle("oscuro");

    const boton = document.querySelector(".tema-btn");

    if (document.body.classList.contains("oscuro")) {

        if (boton) {
            boton.textContent = "☀️";
        }

        localStorage.setItem("tema", "oscuro");

    } else {

        if (boton) {
            boton.textContent = "🌙";
        }

        localStorage.setItem("tema", "claro");
    }
}


// =================================
// CARGAR TEMA GUARDADO
// =================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const tema = localStorage.getItem("tema");

        const boton =
            document.querySelector(".tema-btn");


        if (tema === "oscuro") {

            document.body.classList.add("oscuro");

            if (boton) {
                boton.textContent = "☀️";
            }

        }

    }
);


// =================================
// ANIMACIÓN DE ESTADÍSTICAS
// =================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const numeros =
            document.querySelectorAll("[data-numero]");


        numeros.forEach(function (elemento) {

            const objetivo =
                parseInt(
                    elemento.getAttribute("data-numero")
                );


            let numero = 0;


            const incremento =
                Math.max(1, Math.ceil(objetivo / 50));


            const intervalo =
                setInterval(function () {

                    numero += incremento;


                    if (numero >= objetivo) {

                        numero = objetivo;

                        clearInterval(intervalo);
                    }


                    elemento.textContent = numero;

                }, 30);

        });

    }
);


// =================================
// BUSCAR ESTUDIANTES
// =================================

function buscarEstudiante() {

    const campo =
        document.getElementById("buscar");


    if (!campo) {
        return;
    }


    const texto =
        campo.value.toLowerCase().trim();


    const estudiantes =
        document.querySelectorAll(
            ".estudiante-card"
        );


    const sinResultados =
        document.getElementById(
            "sinResultados"
        );


    let encontrados = 0;


    estudiantes.forEach(function (estudiante) {

        const contenido =
            estudiante.textContent.toLowerCase();


        if (contenido.includes(texto)) {

            estudiante.style.display = "";

            encontrados++;

        } else {

            estudiante.style.display = "none";

        }

    });


    if (sinResultados) {

        if (encontrados === 0) {

            sinResultados.style.display = "block";

        } else {

            sinResultados.style.display = "none";

        }

    }

}


// =================================
// MOSTRAR PERFIL
// =================================

function mostrarPerfil(nombre) {

    alert(
        "PERFIL DEL ESTUDIANTE\n\n" +
        "Nombre: " + nombre +
        "\n\n" +
        "Campus Digital\n" +
        "Estudiante activo de nuestra comunidad educativa."
    );

}


// =================================
// FORMULARIO DE CONTACTO
// =================================

function enviarFormulario(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();


    const correo =
        document.getElementById("correo").value.trim();


    const asunto =
        document.getElementById("asunto").value.trim();


    const mensaje =
        document.getElementById("mensaje").value.trim();


    const resultado =
        document.getElementById(
            "mensajeFormulario"
        );


    if (
        nombre === "" ||
        correo === "" ||
        asunto === "" ||
        mensaje === ""
    ) {

        resultado.textContent =
            "⚠️ Por favor, completa todos los campos.";

        resultado.style.color = "#dc2626";

        return;
    }


    resultado.textContent =
        "✅ ¡Mensaje enviado correctamente!";

    resultado.style.color = "#16a34a";


    document
        .querySelector(".formulario")
        .reset();

}