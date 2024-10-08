// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Animal
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    sonido() {
        // Método vacío que será implementado en las subclases
    }
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    sonido() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += `${this.nombre} dice: ¡Guau Guau!<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
    constructor(nombre, color) {
        super(nombre);
        this.color = color;
    }

    sonido() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += `${this.nombre} dice: ¡Miau Miau!<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Pájaro que hereda de Animal
class Pajaro extends Animal {
    constructor(nombre, especie) {
        super(nombre);
        this.especie = especie;
    }

    sonido() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += `${this.nombre} dice: ¡La cucaracha La cucaracha!<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Función que muestra el sonido de cualquier tipo de animal
function hacerSonido(animal) {
    animal.sonido();
}

// Instancias de cada clase
const animalPerro = new Perro("Chiquitin", "Criollo");
const animalGato = new Gato("Pirata", "Negro");
const animalPajaro = new Pajaro("Marcus", "Loro");

// Llamado al método sonido para cada animal
hacerSonido(animalPerro);
hacerSonido(animalGato);
hacerSonido(animalPajaro);
