const Auto = require('./Class/Auto');
const Moto = require('./Class/Moto');
const ordenarPorPrecio = require('./utils/ordenarPorPrecio');
const buscarVehiculoPorLetra = require('./utils/buscarPorLetra');

let peugeot = new Auto('Peugeot', '206', 4, 200000);
let honda = new Moto('Honda', 'Titan', '125c', 60000);
let peugeot2 = new Auto('Peugeot', '208', 5, 250000);
let yamaha = new Moto('YAMAHA','YBR','160c',80500.50)

var arrayVehiculos = [peugeot, honda, peugeot2, yamaha];

for(vehiculo of arrayVehiculos) {
    vehiculo.getDescripcion();
}
console.log('=============================');

//Ordena el array de vehiculos por precio
const arrayOrdenado = ordenarPorPrecio(arrayVehiculos);

//Buscar el vehiculo por letra
const vehiculoFiltrado = buscarVehiculoPorLetra(arrayVehiculos, 'Y');

console.log('Vehículo más caro: ' + arrayOrdenado[0].marca + ' ' + arrayOrdenado[0].modelo);
console.log('Vehículo más barato: ' + arrayOrdenado[arrayVehiculos.length - 1].marca + ' ' + arrayOrdenado[arrayVehiculos.length - 1].modelo);
console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' + vehiculoFiltrado[0].marca + ' ' + vehiculoFiltrado[0].modelo + ' $' + vehiculoFiltrado[0].precio);

console.log('=============================');
console.log('Vehículos ordenados por precio de mayor a menor:');
for(vehiculo of arrayOrdenado) {
    console.log(vehiculo.marca + ' ' + vehiculo.modelo);
}