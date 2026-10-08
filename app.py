from flask import Flask, render_template

app = Flask(__name__)


# =========================
# PÁGINA DE INICIO
# =========================
@app.route("/")
def inicio():
    return render_template("inicio.html")


# =========================
# PÁGINA DE ESTUDIANTES
# =========================
@app.route("/estudiantes")
def estudiantes():

    lista_estudiantes = [
        {
            "nombre": "María López",
            "curso": "3ro de Sistemas",
            "imagen": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            "nombre": "Carlos Fernández",
            "curso": "2do de Sistemas",
            "imagen": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            "nombre": "Ana Martínez",
            "curso": "3ro de Sistemas",
            "imagen": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            "nombre": "Juan Pérez",
            "curso": "1ro de Sistemas",
            "imagen": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        {
            "nombre": "Lucía Ramírez",
            "curso": "2do de Sistemas",
            "imagen": "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            "nombre": "Diego Morales",
            "curso": "1ro de Sistemas",
            "imagen": "https://randomuser.me/api/portraits/men/52.jpg"
        }
    ]

    return render_template(
        "estudiantes.html",
        estudiantes=lista_estudiantes
    )


# =========================
# PÁGINA DE CONTACTO
# =========================
@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


# =========================
# EJECUTAR SERVIDOR
# =========================
if __name__ == "__main__":
    app.run(debug=True)