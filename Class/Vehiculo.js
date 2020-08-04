class Vehiculo {
	constructor(marca, modelo, precio) {
		this.marca = marca;
		this.modelo = modelo;
		this.precio = precio;
    }
    
    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getPreico() {
        return this.precio;
    }

    getDescripcion(){};

}

module.exports = Vehiculo;