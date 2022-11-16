class programacion {

    constructor(id, tipo, bloque, ciclo, ejercicio) {

        this.id = id;
        this.bloque = bloque;
        this.ciclo = ciclo;
        this.ejercicio = ejercicio;

    }
}

class programacionDiaria {

    constructor(fecha, tipo, categoria, programacion) {
        this.fecha = fecha;
        this.tipo = tipo;
        this.categoria = categoria;
        this.programacion = programacion
    }
}

class ciclo {

    constructor(tiempo, repeticiones, series) {
        this.tiempo = tiempo;
        this.repeticiones = repeticiones;
        this.series = series;
    }
}

const programaciones = []