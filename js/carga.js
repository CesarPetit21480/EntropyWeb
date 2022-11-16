const selectTipo = document.getElementById("selectTipo");
const urlTipoEntr = '../json/tipoEntrenamiento.json';
const contenedorProgramacion = document.getElementById('contenedorProgramacion');


async function getEntrenamientoEntrenamiento() {
    const response = await fetch(urlTipoEntr)
    const datos = await response.json();
    cargarTipoEntrenamiento(datos);
}
getEntrenamientoEntrenamiento();

const cargarTipoEntrenamiento = ((datos) => {

    datos.forEach(tipo => {

        const opt = document.createElement('option')
        opt.value = (tipo.nombre).toLowerCase()
        opt.textContent = (tipo.nombre)
        opt.id = tipo.id
        selectTipo.appendChild(opt);
    });
})

const selectBloque = document.getElementById("selectBloque");

const urlBloque = '../json/bloqueEjercicio.json';

async function getBloqueEntrenamiento() {
    const response = await fetch(urlBloque)
    const datos = await response.json();
    cargarBloque(datos);
}
getBloqueEntrenamiento();

const cargarBloque = ((datos) => {

    datos.forEach(tipo => {

        const opt = document.createElement('option')
        opt.value = (tipo.nombre).toLowerCase()
        opt.textContent = (tipo.nombre)
        opt.id = tipo.id
        selectBloque.appendChild(opt);
    });
})

const selectEjercicio = document.getElementById("selectEjercicio");

const urlEjercicio = '../json/ejercicio.json';

async function getEjercicios() {
    const response = await fetch(urlEjercicio)
    const datos = await response.json();
    cargarEjercicios(datos);
}
getEjercicios();

const cargarEjercicios = ((datos) => {

    datos.forEach(tipo => {

        const opt = document.createElement('option')
        opt.value = (tipo.nombre).toLowerCase()
        opt.textContent = (tipo.nombre)
        opt.id = tipo.id
        selectEjercicio.appendChild(opt);
    });
})

const btnAgregar = document.getElementById("btnAgregar");
const categorias = [];
btnAgregar.addEventListener("click", (e) => {

    e.preventDefault();

    const fechaProgramacion = document.getElementById("fechaProgramacion");
    const selectTipo = document.getElementById("selectTipo");
    const selectBloque = document.getElementById("selectBloque");
    const repeticiones = document.getElementById("repeticiones");
    const series = document.getElementById("series");
    const selectEjercicio = document.getElementById("selectEjercicio");
    const tiempo = document.getElementById("tiempo");
    cargarCategorias();
    const nuevoCiclo = new ciclo(tiempo.value, repeticiones.value, series.value)

    const ultimoindex = programaciones.lastIndexOf();
    const nuevoId = getUltimoID();
    const nuevaProgramacion = new programacion(nuevoId, selectBloque.value, nuevoCiclo, selectEjercicio.value)

    // const div = document.createElement("div")
    // div.innerHTML += `
    //     <div class="col">
    //       <div class="card h-100">
    //         <img src="..." class="card-img-top" alt="...">
    //         <div class="card-body">
    //           <h5 class="card-title">Card title</h5>
    //           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         </div>
    //       </div>
    //     </div>`

    // contenedorProgramacion.appendChild(div);
    programaciones.push(nuevaProgramacion);

    const nuevaprograDiaria = new programacionDiaria(fechaProgramacion.value, selectTipo.value, categorias, programaciones)
    localStorage.setItem('proga', JSON.stringify(nuevaprograDiaria));


})



const cargarCategorias = () => {

    const beginner = document.getElementById("beginner")
    const scaled = document.getElementById("scaled");
    const advanced = document.getElementById("advanced");
    let indice;
    let existe

    if (beginner.checked) {
        existe = categorias.some(cat => cat === beginner.value)
        if (!existe)
            categorias.push(beginner.value)
    } else {
        indice = categorias.indexOf(beginner.value);
        categorias.splice(indice, 1);
        console.log('pp', categorias);
    }
    if (scaled.checked) {
        existe = categorias.some(cat => cat === scaled.value)
        if (!existe)
            categorias.push(scaled.value)
    } else {
        indice = categorias.indexOf(scaled.value);
        categorias.splice(indice, 1);
        console.log('pp', categorias);
    }
    if (advanced.checked) {
        existe = categorias.some(cat => cat === advanced.value)
        if (!existe)
            categorias.push(advanced.value)
    } else {
        indice = categorias.indexOf(advanced.value);
        categorias.splice(indice, 1);
        console.log('pp', categorias);
    }
}

const getUltimoID = () => {

    const existeProgra = programaciones.indexOf();
    const max = 0;

    if (existeProgra === -1)
        return 1;


    programaciones.forEach((progra) => {

        if (progra.id > max)
            max = progra.id;
    })
    return max;
}