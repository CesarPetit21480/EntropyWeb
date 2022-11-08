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
let carritoDeCompras = [];
if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
}