console.log('JAVA SCRIPT');


// funciones

function menu() {
    const opcion = parseInt(prompt("Bienevenido a Entropy Croosfit que desea realizar: \n 1- Agregar Stock \n 2- Quitar stock \n 3- Buscar Producto  \n  4- comprar Producto  \n 5- Modificar Precio\n 6- Salir"));
    return opcion;
}

function agregarStock(prod, tamanio, cantidad) {

    // busco el elemento
    const elemento = ProductosCrossfit.find(p => p.idProducto === prod);

    // inidice del producto

    const indiceElemento = ProductosCrossfit.findIndex(p => p.idProducto === prod);

    // busco el stocK
    const stockEncontrado = elemento.stock.find(s => s.id === tamanio);

    // busco el indice
    const indiceStock = elemento.stock.findIndex(s => s.id === tamanio);

    stockEncontrado.cantidad += cantidad;
    // modifico la cantidad elementos

    //ProductosCrossfit[indiceElemento].stock[indiceStock].cantidad += cantidad;

    // agrego stock al elemento

    elemento.stock.splice(indiceStock, 1, stockEncontrado);
}


function quitarStock(prod, tamanio, cantidad) {

    // busco el elemento
    const elemento = ProductosCrossfit.find(p => p.idProducto === prod);

    // inidice del producto

    const indiceElemento = ProductosCrossfit.findIndex(p => p.idProducto === prod);

    // busco el stocK
    const stockEncontrado = elemento.stock.find(s => s.id === tamanio);

    // busco el indice
    const indiceStock = elemento.stock.findIndex(s => s.id === tamanio);

    stockEncontrado.cantidad = stockEncontrado.cantidad - cantidad;
    // modifico la cantidad elementos

    //ProductosCrossfit[indiceElemento].stock[indiceStock].cantidad += cantidad;

    // agrego stock al elemento

    elemento.stock.splice(indiceStock, 1, stockEncontrado);
}



function buscarProducto(prod) {

    // busco el elemento
    const elemento = ProductosCrossfit.find(p => p.idProducto === prod);
    return elemento;




}

let opcion = menu();

while (opcion !== 6) {

    switch (opcion) {

        case 1:
            {
                const prod = parseInt(prompt("Ingrese que desea Incorporar al Stock \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                const tamanio = parseInt(prompt("Ingrese que Talle desea Incorporar al Stock \n 1-xs \n 2-m \n 3-xs"));
                const cantidad = parseInt(prompt("Ingrese que cantidad desea Incorporar al Stock"));
                agregarStock(prod, tamanio, cantidad);
                const producto = buscarProducto(prod);
                console.log(`El producto ${producto.nombre} ha Agregado su stock correctamente`);
            }
        case 2:
            {
                const prod = parseInt(prompt("Ingrese que desea quitar del Stock \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                const tamanio = parseInt(prompt("Ingrese que Talle desea Incorporar al Stock \n 1-xs \n 2-m \n 3-xs"));
                const cantidad = parseInt(prompt("Ingrese que cantidad desea quitar al Stock"));
                quitarStock(prod, tamanio, cantidad);
                const producto = buscarProducto(prod);
                console.log(`El producto ${producto.nombre} ha quitado su stock correctamente`);
            }
        case 3:
            {
                const prod = parseInt(prompt("Ingrese producto que desea buscar \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                buscarProcucto(prod);
                console.log("Stock Modificado", ProductosCrossfit);
            }
    }
    opcion = menu();

}