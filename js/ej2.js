class Cuenta {
  constructor(tit) {
    this.titular = tit;
    this.saldo = 0;
  }

  ingresar(monto) {this.saldo += monto;}

  extraer(monto) {this.saldo -= monto;}

  informar() {
    document.write(`<h3>Informe</h3>`)
    document.write(`<h4>Titular: ${this.titular}</h4>`);
    document.write(`<h4>Saldo actual: ${this.saldo}</h4> `);
    document.write(`<h4>--------------------------------</h4> `);
  }
}


const cuenta = new Cuenta("Alex");

cuenta.informar();
cuenta.ingresar(15000);
cuenta.informar();
cuenta.extraer(3000);
cuenta.informar();