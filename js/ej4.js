class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos() {
    document.write(`<h4>Codigo: ${this.codigo}</h4>`);
    document.write(`<h4>Nombre: ${this.nombre}</h4>`);
    document.write(`<h4>Precio: ${this.precio}</h4>`);
    document.write('<h4>----------------------</h4>');
  }
}

const azucar = new Producto('001', 'Azucar', 900);
const cafe = new Producto('002', 'Cafe', 1000);
const te = new Producto('003', 'Te', 400);
const productos = [azucar, cafe, te];

productos.forEach(producto => {
  producto.imprimeDatos();
});