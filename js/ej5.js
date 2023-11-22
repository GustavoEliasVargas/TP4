class Persona {
  constructor(nombre, sexo,edad, peso, altura) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.edad = edad;
    this.peso = peso;
    this.altura = altura;
    this.anoNacimiento = new Date().getFullYear()- edad;
    this.dni = this.generarDni();
  }

  mostrarGeneracion() {
    const generaciones = {
      "Silent Generation": "Austeridad",
      "Baby Boom": "Ambicion",
      "Generacion X": "Obsesión por el éxito",
      "Generación Y": "Frustración",
      "Generacion Z": "Irreverencia",
      "No definida" : "No definida"
      // Puedes expandir esta lista con más generaciones y sus características
    };

    let generacion = "No definida";

    if (this.anoNacimiento >= 1930 && this.anoNacimiento <= 1948) {
      generacion = "Silent Generation";
    } else if (this.anoNacimiento >= 1949 && this.anoNacimiento <= 1968) {
      generacion = "Baby Boom";
    } else if (this.anoNacimiento >= 1969 && this.anoNacimiento <= 1980) {
      generacion = "Generacion X";
    } else if (this.anoNacimiento >= 1981 && this.anoNacimiento <= 1993){
      generacion = "Generación Y";
    } else if (this.anoNacimiento >= 1994 && this.anoNacimiento <= 2010){
      generacion = "Generación Z"; 
    } else if (this.anoNacimiento >=2011){
      generacion = "No definida";
    }
    return generaciones[generacion];
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }
  generarDni() {
    return Math.floor(Math.random() * 100000000);
  }

  mostrarDatos() {
    document.write("<h3>Información de la Persona:</h3>");
    document.write(`<h4>Nombre: ${this.nombre}</h4>`);
    document.write(`<h4>Edad: ${this.edad} años </h4>`);
    document.write(`<h4>Sexo: ${this.sexo}</h4>`);
    document.write(`<h4>Peso: ${this.peso} kg </h4>`);
    document.write(`<h4>Altura: ${this.altura} cm </h4>`);
    document.write(`<h4>Año de Nacimiento: ${this.anoNacimiento}</h4>`);
    document.write(`<h4>DNI: ${this.dni}</h4>`);
    document.write(`<h4>Rasgo de la generacion: ${this.mostrarGeneracion()} </h4>`);
    document.write(`<h4>${this.esMayorDeEdad() ? "Es mayor de edad" : "No es mayor de edad"}</h4>`)
  }
}
const persona1 = new Persona("Gustavo", "H", 43 , 80, 165);
persona1.mostrarDatos();
