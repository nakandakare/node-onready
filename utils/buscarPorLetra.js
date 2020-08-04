module.exports = buscarVehiculoPorLetra = (arrayVehiculos, letra) => {
    return arrayVehiculos.filter(vehiculo => vehiculo.modelo.includes(letra));
} 