// OBJETOS Y ARRAYS
class productoCrossfit {

    constructor(idProducto, nombre, stock) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.stock = stock;
    }
}
class stock {
    constructor(id, descripocionTalle, cantidad, valor) {
        this.id = id;
        this.tipoTalle = descripocionTalle;
        this.cantidad = cantidad;
        this.valor = valor;
    }
}
const ProductosCrossfit = [];
const stocksCalleras = [];
const stocksRodilleras = [];
const stocksSogas = [];

const stockCallerasXs = new stock(1, "XS", 10, 2500);
const stocCalleraskM = new stock(2, "M", 10, 2700);
const stockCallerasXL = new stock(3, "XL", 10, 2900);
stocksCalleras.push(stockCallerasXs, stocCalleraskM, stockCallerasXL);

const stockRodillerasXs = new stock(1, "XS", 10, 1600);
const stocCRodillerasM = new stock(2, "M", 10, 1700);
const stockRodillerasXL = new stock(3, "XL", 10, 1900);
stocksRodilleras.push(stockRodillerasXs, stocCRodillerasM, stockRodillerasXL);


const stockSogasXs = new stock(1, "XS", 10, 2500);
const stocCSogasM = new stock(2, "M", 10, 3000);
const stockSogasXl = new stock(3, "XL", 10, 3200);
stocksSogas.push(stockSogasXs, stocCSogasM, stockSogasXl);


const calleras = new productoCrossfit(1, "calleras", stocksCalleras);
const rodilleras = new productoCrossfit(2, "Rodilleras", stocksRodilleras);
const sogas = new productoCrossfit(3, "Sogas", stocksSogas);

ProductosCrossfit.push(calleras, rodilleras, sogas);
console.log('listaInicial', ProductosCrossfit);