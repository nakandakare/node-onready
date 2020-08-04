const Vehiculo = require('./Vehiculo');

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca,modelo,precio);

        this.cilindrada = cilindrada;
    }

    getCilindrada(){
        return this.cilindrada;
    }

    //Overriding
    getDescripcion(){
        console.log('Marca: ' + this.marca + ' // ' + 'Modelo: ' + this.modelo + ' // ' + 'Cilindrada: ' + this.cilindrada + ' // ' + 'Precio: $' + this.precio);
    }
}

module.exports = Moto;