const eur = 230
const dol = 255
const real = 50
const uyu = 33

// DOLAR
let cotizacion = prompt("Ingrese un número:");

let numero = parseInt(cotizacion);

if (isNaN(numero)) {
  alert("Solo se permiten números.");
} else {
  let CuentaDolar = dol
  let total = numero * CuentaDolar;
  console.log("EN total a pagar es: $" + total);
}

// EURO

if (isNaN(numero)) {
  alert("Solo se permiten números.");
} else {
  let CuentaDolar = eur
  let total = numero * CuentaDolar;
  console.log("EN total a pagar es: $" + total);
}

// REAL

if (isNaN(numero)) {
  alert("Solo se permiten números.");
} else {
  let CuentaDolar = real
  let total = numero * CuentaDolar;
  console.log("EN total a pagar es: $" + total);
}

// UYU


if (isNaN(numero)) {
  alert("Solo se permiten números.");
} else {
  let CuentaDolar = uyu
  let total = numero * CuentaDolar;
  console.log("EN total a pagar es: $" + total);
}
