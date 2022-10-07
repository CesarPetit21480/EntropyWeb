console.log('JAVA SCRIPT');


// funciones

function menu() {
    const opcion = parseInt(prompt("Bienevenido a Entropy Croosfit que desea realizar: \n 1- Agregar Stock \n 2- Quitar stock \n 3- Comprar Producto  \n  4- Buscar  \n 5- Modificar Precio\n 6- Salir"));
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




let opcion = menu();

while (opcion !== 6) {


    switch (opcion) {

        case 1:
            {
                const prod = parseInt(prompt("Ingrese que desea Incorporar al Stock \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                const tamanio = parseInt(prompt("Ingrese que Talle desea Incorporar al Stock \n 1-xs \n 2-m \n 3-xs"));
                const cantidad = parseInt(prompt("Ingrese que cantidad desea Incorporar al Stock"));
                agregarStock(prod, tamanio, cantidad);
                console.log("Stock Modificado", ProductosCrossfit);
            }
    }
    opcion = menu();

}