// OBJETOS Y ARRAYS
class productoCrossfit {

    constructor(idProducto, nombre, stock, imagen, descripcion) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.stock = stock;
        this.imagen = imagen;
        this.descripcion = descripcion;
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

class productoComprado {

    constructor(idProducto, idTalle, precioUnitario, precioTotal, cantidad) {
        this.idProducto = idProducto;
        this.idTalle = idTalle;
        this.precioUnitario = precioUnitario;
        this.precioTotal = precioTotal;
        this.cantidad = cantidad;
    }
}

// array
const ProductosCrossfit = [];
const stocksCalleras = [];
const stocksMuñequeras = [];
const stocksSogas = [];
const carritoDeCompras = [];


// cargo objetos

const stockCallerasXs = new stock(1, "XS", 10, 2500);
const stocCalleraskM = new stock(2, "M", 10, 2700);
const stockCallerasXL = new stock(3, "XL", 10, 2900);
stocksCalleras.push(stockCallerasXs, stocCalleraskM, stockCallerasXL);

const stockMuñequerasXs = new stock(1, "XS", 10, 1600);
const stocCMuñequerasM = new stock(2, "M", 10, 1700);
const stockMuñequerassXL = new stock(3, "XL", 10, 1900);
stocksMuñequeras.push(stockMuñequerasXs, stocCMuñequerasM, stockMuñequerassXL);


const stockSogasXs = new stock(1, "XS", 10, 2500);
const stocCSogasM = new stock(2, "M", 10, 3000);
const stockSogasXl = new stock(3, "XL", 10, 3200);
stocksSogas.push(stockSogasXs, stocCSogasM, stockSogasXl);


const calleras = new productoCrossfit(1, "calleras", stocksCalleras, "../image/calleras.png", "Combo Wod: Calleras Y Muñequeras Originales");
const muñequeras = new productoCrossfit(2, "Rodilleras", stocksMuñequeras, "../image/muñequerasNueva.png", "Muñequeras Con Anclaje Gimnasio Weightlifting Funcional Svg");
const sogas = new productoCrossfit(3, "Sogas", stocksSogas, "../image/sogas.png", "Soga Para Saltar Acero Speed Rope Entrenamiento Gym Fitness");

ProductosCrossfit.push(calleras, muñequeras, sogas);
console.log('listaInicial', ProductosCrossfit);