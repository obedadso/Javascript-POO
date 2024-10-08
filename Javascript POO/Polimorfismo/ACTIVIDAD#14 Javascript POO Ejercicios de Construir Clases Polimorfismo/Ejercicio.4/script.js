// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Instrumento
class Instrumento {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    tocar() {
        // Método vacío que será implementado en las subclases
    }
}

// Clase Guitarra que hereda de Instrumento
class Guitarra extends Instrumento {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    tocar() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "Estoy tocando la guitarra<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Piano que hereda de Instrumento
class Piano extends Instrumento {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    tocar() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "Estoy tocando el piano<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Trompeta que hereda de Instrumento
class Trompeta extends Instrumento {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    tocar() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "Estoy tocando la trompeta<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Función que muestra la descripción de cualquier tipo de instrumento
function mostrarInstrumento(instrumento) {
    instrumento.tocar();
}

// Instancias de cada clase
const instrumentoGuitarra = new Guitarra("PRS (Paul Reed Smith)", "Custom 24", "Eléctrica");
const instrumentoPiano = new Piano("Bösendorfer", "280VC", "Piano de cola");
const instrumentoTrompeta = new Trompeta("Holton", "H179", "Trompeta Bb");

// Llamado al método tocar para cada instrumento
mostrarInstrumento(instrumentoGuitarra);
mostrarInstrumento(instrumentoPiano);
mostrarInstrumento(instrumentoTrompeta);
