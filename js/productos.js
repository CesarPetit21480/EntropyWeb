// ES6 Modules or TypeScript

let cant = 0;
const principal = document.getElementById("principal");
const volver = document.getElementById("volver");
const btn = document.createElement("button");
btn.className = "btn btn-primary btn-lg d-flex justify-content-center btnAgregar";
btn.id = "btnVolver";
btn.innerText = "VOLVER A PRODUCTOS";
volver.appendChild(btn);



const url = "../json/productosCrossfit.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(prodCrossfit => {
            const nuevoProducto = new productoCrossfit(prodCrossfit.idProducto, prodCrossfit.nombre, prodCrossfit.stock, prodCrossfit.imagen, prodCrossfit.descripcion);
            ProductosCrossfit.push(nuevoProducto);

        });
        mostrarProductos();
    })
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Proceso Finalizado")
    })

const mostrarProductos = () => {

    volver.style.visibility = 'hidden';

    ProductosCrossfit.forEach((producto) => {

        const imagen = producto.imagen;
        const id = producto.idProducto;
        const nombre = producto.nombre;
        const descripcion = producto.descripcion;
        const div = document.createElement("li");
        div.innerHTML =
            `<div id="${id}" class="card tamanioCards">
                <div class="d-flex justify-content-center">
                <img src=${imagen} class="card-img-top sizeimg" alt="productos">
                </div>   
                <div class="card-body">
                  <h5 class="card-title">${nombre}</h5>
                  <p>${descripcion}</p>   
                </div>
              </div>`
            // div.onclick = () => {
            //     filtrarProducto(id);
            // }
        div.addEventListener("click", () => {
            filtrarProducto(id);
        })

        principal.appendChild(div);
    });

};
const filtrarProducto = (p_id) => {

    cant = 0;
    principal.innerHTML = ``;
    const productoSeleccionado = ProductosCrossfit.find((producto => producto.idProducto === p_id));
    const imagen = productoSeleccionado.imagen;
    const id = productoSeleccionado.idProducto;
    const nombre = productoSeleccionado.nombre;
    const descripcion = productoSeleccionado.descripcion;
    volver.style.visibility = 'visible';

    const li = document.createElement("li");
    li.innerHTML = `
    <div class="row cardProducto">
    <div id="1" class=" col-6 card tamanioCardsGrande">
        <div class="d-flex justify-content-center">
            <img src="${imagen}" class="card-img sizeimg" alt="productos">
        </div>
    </div>
    <div id="1" class="col-6 gridCompraProductos">
        <div class="nombre">
            <h2 class="card-title">${nombre}</h2>
        </div>
        <div class="descripcion">${descripcion}</div>
        <div class="radioProductos">
            <h4>Selleccione Talle</h4>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="rXs" value="Xs" checked>
                <label class="form-check-label" for="inlineRadio1">XS</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Rm" value="M">
                <label class="form-check-label" for="inlineRadio2">M</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="rXl" value="XL">
                <label class="form-check-label" for="inlineRadio3">XL</label>
            </div>
        </div>
        <div class="botonesProductos">
            <button id="btnMenos" class="botones">-</button>
            <label id="cantProd" class="lblbotones" for="label">${cant}</label>
            <button id="btnMas" class="botones">+</button>

            <div class="d-flex justify-content-center ">
                <button data-bs-toggle="modal" data-bs-target="#modalCompra" class="btn btn-outline-dark btnAgregar" id="btnComprar" type="button">Comprar</button>
            </div>
        </div>
    </div>
</div>`
    principal.appendChild(li);

    const btnVolver = document.getElementById("btnVolver");
    btnVolver.addEventListener("click", () => {
        principal.innerHTML = ``;
        mostrarProductos();
    })
    const btnComprar = document.getElementById("btnComprar");
    btnComprar.disabled = true;

    btnComprar.onclick = () => {

        const xschecked = document.getElementById("rXs").checked;
        const mcchecked = document.getElementById("Rm").checked;
        const idTalle = xschecked ? 1 : mcchecked ? 2 : 3;
        const modal = document.getElementById("modalInfo");
        const btnSave = document.getElementById("btnSave");
        const div = document.createElement('div');
        const precioProducto = productoSeleccionado.stock[idTalle - 1].valor;
        const nombreTalle = productoSeleccionado.stock[idTalle - 1].tipoTalle;
        const precioTotalProd = precioProducto * cant;
        const prodComprado = new productoComprado(id, idTalle, precioProducto, precioTotalProd, cant);
        modal.innerHTML = ``;
        div.innerHTML = `
        <div class="card cardCompra">
            <div class="card-titulo">${productoSeleccionado.nombre}</div>
            <div class="card-body">
                <p class="card-text">LA CANTIDAD : ${cant}</p>
                <p class="card-text"> PRECIO UNITARIO : ${precioProducto}</p>
                <p class="card-text"> PRECIO TOTAL : ${precioTotalProd}</p>
                <p class="card-text"> TALLE : ${nombreTalle}</p>
            </div>
        </div>`
        modal.appendChild(div);

        btnSave.onclick = () => {
            buscoEnCarrito(prodComprado);
            Toastify({
                text: "Producto agregado al carrito Correctamente",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: " linear-gradient(to right, #434343 0%, black 100%)",
                }
            }).showToast();
            document.getElementById("btnClose").click();
            document.getElementById("btnVolver").click();
        }
    }
    const btnMas = document.getElementById("btnMas");

    btnMas.addEventListener("click", () => {
        const cantProd = document.getElementById("cantProd");
        btnComprar.disabled = false;
        cant = cant + 1;
        cantProd.innerText = cant;
    })

    const btnMenos = document.getElementById("btnMenos");
    btnMenos.addEventListener("click", () => {
        const cantProd = document.getElementById("cantProd");
        cant = cant - 1;
        if (cant <= 0) {
            cant = 0;
            btnComprar.disabled = true;
        }
        cantProd.innerText = cant;
    })
};
const buscoEnCarrito = (prodComprado) => {

    const productoCarrito = carritoDeCompras.find(producto => producto.idProducto === prodComprado.idProducto && producto.idTalle === prodComprado.idTalle);
    if (productoCarrito) {
        productoCarrito.cantidad += cant;
        productoCarrito.precioTotal = productoCarrito.precioUnitario * productoCarrito.cantidad;
    } else {
        carritoDeCompras.push(prodComprado);
    }
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

const vaciarCarrito = document.getElementById("VaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElcarrito();
    Toastify({
        text: "Carrito Vaciado carrito Correctamente",
        duration: 3000,
        gravity: "top",
        position: "right",

        style: {
            background: " linear-gradient(to right, #434343 0%, black 100%)",
        }
    }).showToast();
});

const eliminarTodoElcarrito = () => {

    carritoDeCompras = [];
    calcularTotal();
    mostrarCarrito();
    localStorage.clear();
}

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
});

const mostrarCarrito = () => {

    contenedorCarrito.innerHTML = ``
    carritoDeCompras.forEach((producto) => {
        const id = producto.idProducto;
        const idTalle = producto.idTalle;
        const precioUnitario = producto.precioUnitario;
        const nombre = ProductosCrossfit.find(prod => prod.idProducto === id).nombre;
        const precioTotal = producto.precioTotal;
        const cantidad = producto.cantidad;
        const img = ProductosCrossfit.find(prod => prod.idProducto === id).imagen;
        const nombreTalle = ProductosCrossfit.find(prod => prod.idProducto === id).stock[idTalle - 1].tipoTalle;
        const card = document.createElement("div");
        card.innerHTML = `<div class="card">
        <img src="${img}" class="card-img-top imgProductos" alt="${nombre}">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Precio Unitario: $${precioUnitario}</p>
          <p class="card-text"> Precio Total: $${precioTotal}</p>
          <p class="card-text">Cantidad : ${cantidad}</p>
          <p class="card-text">Talle Elegido : ${nombreTalle}</p>
          <button class="btn colorBoton" id="eliminar${id}${idTalle}">Quitar Producto</button>
        </div>
      </div>`
        contenedorCarrito.appendChild(card);
        const botonEliminar = document.getElementById(`eliminar${id}${idTalle}`);

        botonEliminar.addEventListener("click", () => {
            eliminarProducto(id, idTalle);
        });
        calcularTotal();
    });
}

const total = document.getElementById("total");

const calcularTotal = () => {

    let totalCompra = 0;

    carritoDeCompras.forEach((producto) => {

        totalCompra += producto.precioTotal;
    })

    total.innerHTML = `Total Compra $${totalCompra}`;
}

const eliminarProducto = (id, idTalle) => {

    const idElminar = carritoDeCompras.findIndex(producto => producto.idProducto === id && producto.idTalle === idTalle);
    console.log("indice a Eliminar", idElminar);
    carritoDeCompras.splice(idElminar, 1);
    calcularTotal();
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

}