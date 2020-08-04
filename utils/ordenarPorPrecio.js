module.exports =  ordenarPorPrecio = (arrayToSort) => {
    return arrayToSort.sort((a, b) => b.precio - a.precio);
}
