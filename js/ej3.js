class Rectangulo {
  constructor(x, y) {
    this.alto = x;
    this.ancho = y;
  };
  nuevoAlto(newX) {this.alto = newX;};
  nuevoAncho(newY) {this.ancho = newY;};
  mostrar() {  
    document.write(`<h3> Datos del Rectangulo <h3>`);
    document.write(`<h4> Alto = ${this.alto} </h4>`);
    document.write(`<h4> Ancho = ${this.ancho} </h4>`);    
    document.write(`<h3>----------------------------<h3>`);
  };
  perimetro() {return 2 * (this.alto + this.ancho);};
  area() {return this.alto * this.ancho;};
}
const rectA = new Rectangulo(5, 10);
rectA.mostrar();
rectA.nuevoAlto(8);
rectA.nuevoAncho(12);
rectA.mostrar();
document.write(`<h4>Perímetro: ${rectA.perimetro()}</h4>`);
document.write(`<h4>Area: ${rectA.area()}</h4>`);