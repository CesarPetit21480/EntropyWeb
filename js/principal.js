const principal = document.getElementById("principal");

const mostrarProductos = () => {

    ProductosCrossfit.forEach((producto) => {

        const imagen = producto.imagen;
        const nombre = producto.nombre;
        const descripcion = producto.descripcion;
        const div = document.createElement("div");
        div.innerHTML =
            `<li class="container__li"><div id="card"class="card tamanioCards">
            <div class="d-flex justify-content-center">
            <img src=${producto.imagen} class="card-img-top sizeimg" alt="productos">
            </div>   
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p>${producto.descripcion}</p>   
            </div>
          </div></li>`

        principal.appendChild(div);

    });
};

mostrarProductos();