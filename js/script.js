console.log('JAVA SCRIPT');

// funciones

function menu() {
    const opcion = parseInt(prompt("Bienevenido a Entropy Croosfit que desea realizar: \n 1- Agregar Stock \n 2- Quitar stock \n 3- Buscar Producto  \n  4- comprar Producto  \n 5- Modificar Precio\n 6- Salir"));
    return opcion;
}

function agregarStock(prod, tamanio, cantidad) {

    // busco el elemento
    const elemento = ProductosCrossfit.find(p => p.idProducto === prod); // inidice del producto

    const indiceElemento = ProductosCrossfit.findIndex(p => p.idProducto === prod); // inidice del producto

    const stockEncontrado = elemento.stock.find(s => s.id === tamanio); // busco el stocK

    const indiceStock = elemento.stock.findIndex(s => s.id === tamanio); // busco el indice

    stockEncontrado.cantidad += cantidad; // modifico la cantidad elementos   

    //ProductosCrossfit[indiceElemento].stock[indiceStock].cantidad += cantidad;

    // agrego stock al elemento

    elemento.stock.splice(indiceStock, 1, stockEncontrado);
}

function quitarStock(prod, tamanio, cantidad) {

    const elemento = ProductosCrossfit.find(p => p.idProducto === prod); // busco el elemento

    const indiceElemento = ProductosCrossfit.findIndex(p => p.idProducto === prod); // inidice del producto

    const stockEncontrado = elemento.stock.find(s => s.id === tamanio); // busco el stocK

    const indiceStock = elemento.stock.findIndex(s => s.id === tamanio); // busco el indice

    stockEncontrado.cantidad = stockEncontrado.cantidad - cantidad; // modifico la cantidad elementos 

    //ProductosCrossfit[indiceElemento].stock[indiceStock].cantidad += cantidad; 

    elemento.stock.splice(indiceStock, 1, stockEncontrado); // agrego stock al elemento
}

function buscarProducto(prod) {

    const elemento = ProductosCrossfit.find(p => p.idProducto === prod); // busco el elemento
    return elemento;
}


function CambiarPrecioProducto(prod, tamanio) {


    let producto = buscarProducto(prod);

    const talleElegido = producto.stock[tamanio - 1].tipoTalle;

    const idTalle = producto.stock[tamanio - 1].id;

    const precio = producto.stock[tamanio - 1].valor;

    const disponible = producto.stock[tamanio - 1].cantidad;

    const nombreProducto = producto.nombre;

    const precioCambiado = parseInt(prompt(`seleccion : ${nombreProducto}  \n talle: ${talleElegido}  \n valor: ${precio} \n disponible:  ${disponible} \n Seleccione Nuevo Precio`));

    const elemento = ProductosCrossfit.find(p => p.idProducto === prod); // busco el elemento

    const indiceElemento = ProductosCrossfit.findIndex(p => p.idProducto === prod); // inidice del producto

    const stockEncontrado = elemento.stock.find(s => s.id === tamanio); // busco el stocK  

    const indiceStock = elemento.stock.findIndex(s => s.id === tamanio); // busco el indice

    stockEncontrado.valor = precioCambiado; // pongo el nuevo valor
    //ProductosCrossfit[indiceElemento].stock[indiceStock].cantidad += cantidad;

    elemento.stock.splice(indiceStock, 1, stockEncontrado); // agrego el nuevo precio delelemento

    producto = buscarProducto(prod); // busco de nuevo el producto cambiado

    console.log(`El producto ${producto.nombre} Cambio su valor correctamente a ${producto.stock[tamanio-1].valor} para su talle ${talleElegido}`);

}

function comprarProducto(prod, tamanio) {

    const producto = buscarProducto(prod);

    const talleElegido = producto.stock[tamanio - 1].tipoTalle;

    const idTalle = producto.stock[tamanio - 1].id;

    const precio = producto.stock[tamanio - 1].valor;

    const disponible = producto.stock[tamanio - 1].cantidad;

    const nombreProducto = producto.nombre;

    let cantidadSeleccionado = 0;

    do {
        cantidadSeleccionado = parseInt(prompt(`seleccion : ${nombreProducto}  \n talle: ${talleElegido}  \n valor: ${precio} \n disponible:  ${disponible} \n Seleccione Cantidad`));

        if (cantidadSeleccionado > disponible) {
            alert("ingreso una cantidad mayor al stock");
        }
    } while (cantidadSeleccionado > disponible);

    const totalComprado = precio * cantidadSeleccionado;

    const compra = new productoComprado(producto.idProducto, idTalle, precio, totalComprado, cantidadSeleccionado);

    carritoDeCompras.push(compra);

    quitarStock(prod, tamanio, cantidadSeleccionado); // quito el stock una vez realizada la compra

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
                break;
            }
        case 2:
            {
                const prod = parseInt(prompt("Ingrese que desea quitar del Stock \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                const tamanio = parseInt(prompt("Ingrese que Talle desea Incorporar al Stock \n 1-xs \n 2-m \n 3-xs"));

                let producto = buscarProducto(prod);
                const cantidadEnStock = producto.stock[tamanio - 1].cantidad;

                let cantidad

                do {
                    cantidad = parseInt(prompt("Ingrese que cantidad desea quitar al Stock"));
                    if (cantidad > cantidadEnStock) {
                        alert("No se puede quitar mas elemento del stock intente de nuevo !!!!");
                    }

                } while (cantidad > cantidadEnStock);

                quitarStock(prod, tamanio, cantidad);
                producto = buscarProducto(prod);
                console.log(`El producto ${producto.nombre} ha quitado su stock correctamente`);
                break;
            }
        case 3:
            {
                const prod = parseInt(prompt("Ingrese producto que desea buscar \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                const producto = buscarProducto(prod);
                console.log("Stock Producto Sellecionado es", producto);
                break;
            }
        case 4:
            {
                const prod = parseInt(prompt("Que Producto Desea Comprar \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                const tamanio = parseInt(prompt("Elija su talle \n 1-xs \n 2-m \n 3-xs"));
                comprarProducto(prod, tamanio);
                console.log('Compra Efectuada', carritoDeCompras);
                break;
            }
        case 5:
            {
                const prod = parseInt(prompt("Ingrese que Producto desea modificar el precio \n 1-calleras \n 2-Rodilleras \n 3-Sogas"));
                const tamanio = parseInt(prompt("Ingrese que Talle: \n 1-xs \n 2-m \n 3-xs"));
                CambiarPrecioProducto(prod, tamanio);
                break;
            }
    }
    opcion = menu();
}