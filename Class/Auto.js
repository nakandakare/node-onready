const Vehiculo = require('./Vehiculo');

class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
        super(marca,modelo,precio);

        this.puertas = puertas;
    }

    getPuertas(){
        return this.puertas;
    }

    //Overriding
    getDescripcion(){
        console.log('Marca: ' + this.marca + ' // ' + 'Modelo: ' + this.modelo + ' // ' + 'Puertas: ' + 4 + ' // ' + 'Precio: $' + this.precio);
    }
}

module.exports = Auto;