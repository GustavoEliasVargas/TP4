let estado= (on) =>{
  return on ? 'encendido' :'apagado';
}
let auto = {
  color:'verde',
  marca:'Renault', 
  modelo: 'Sandero',
  on: false,
  encender: function() {
    this.on = true;
    document.write(`<h3>El auto se encuentra ${estado(this.on)}</h3>`);
  },
  apagar: function() {
    this.on = false;
    document.write(`<h3>El auto se encuentra ${estado(this.on)}</h3>`);
  }
};

document.write(`<h3>El auto es un ${auto.modelo}, marca: ${auto.marca}, de color: ${auto.color}</h3>`)

/* auto.encender(); */

auto.apagar();
 