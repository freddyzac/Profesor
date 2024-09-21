// Definición de la clase Profesor
class Profesor {
    constructor(nombre, materia, experiencia) {
        this.nombre = nombre;           // Atributo 1: Nombre del profesor
        this.materia = materia;         // Atributo 2: Materia que enseña
        this.experiencia = experiencia; // Atributo 3: Años de experiencia
    }

    // Método para crear un objeto (constructor ya hace esta función)
    
    // Método para imprimir la información del profesor
    imprimirInformacion() {
        console.log(`Profesor: ${this.nombre}`);
        console.log(`Materia: ${this.materia}`);
        console.log(`Experiencia: ${this.experiencia} años`);
        console.log('-------------------------');
    }
}

// Creación de tres objetos de la clase Profesor
let profesor1 = new Profesor('Juan Pérez', 'Matemáticas', 10);
let profesor2 = new Profesor('Ana Gómez', 'Historia', 5);
let profesor3 = new Profesor('Carlos López', 'Física', 8);

// Imprimir información de los tres profesores
profesor1.imprimirInformacion();
profesor2.imprimirInformacion();
profesor3.imprimirInformacion();
