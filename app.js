// const persona = {
//   nombre: "Juan",
//   edad: 30,
//   ciudad: "Buenos Aires",
// };

// function persona(nombre, edad, ciudad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.ciudad = ciudad;
// }

// class Persona {
//   constructor(nombre, edad, ciudad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
//   }
// }

// const persona=new Persona('Juan', '30', 'Buenos Aires');

function crearObjetoCuenta(nombre, apellido, saldo) {
  this.nombreCuenta = nombre = prompt("Ingrese el nombre de la cuenta");
  this.apellidoCuenta = apellido = prompt("Ingrese el apellido para la cuenta");
  this.saldoCuenta = saldo = parseInt(prompt("Ingrese el saldo de la cuenta"));
  this.mostrarCuenta = function () {
    return `Nombre: ${this.nombreCuenta}, Apellido: ${this.apellidoCuenta}, Saldo: ${this.SaldoCuenta}`;
  };
}

const cuenta1 = new crearObjetoCuenta(null, null, null);
console.log(cuenta1.mostrarCuenta());