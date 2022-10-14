const principal = document.getElementById("principal");

for (producto of ProductosCrossfit) {
    principal.innerHTML += `<li class="container__li"><div id="card"class="card tamanioCards">
    <div class="d-flex justify-content-center">
    <img src=${producto.imagen} class="card-img-top sizeimg" alt="productos">
    </div>   
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p>${producto.descripcion}</p>   
    </div>
  </div></li>`;
}


$(function() {
    $('#datetimepicker1').datetimepicker();
});