from flask import Flask

app = Flask(__name__)
 
 
@app.route("/")
def inicio():
    return "Bienvenido a flask"

@app.route("/estudiantes")
def estudiantes():
    return "Lista de estudiantes"


@app.route("/contacto")
def contacto():
    return "pagina de contacto"



if __name__ == "__main__":
    app.run(debug=True)
