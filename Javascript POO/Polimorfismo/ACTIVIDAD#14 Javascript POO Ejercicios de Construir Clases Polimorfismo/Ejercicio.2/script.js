// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Vehiculo
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    descripcion() {
        // Método vacío que será implementado en las subclases
    }
}

// Clase Carro que hereda de Vehiculo
class Carro extends Vehiculo {
    constructor(marca, modelo, color) {
        super(marca, modelo);
        this.color = color;
    }

    descripcion() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "Soy un carro veloz<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Color: ${this.color}<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    descripcion() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "Soy una moto veloz<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Modelo: ${this.modelo}<br>`;
        output.innerHTML += `Tipo: ${this.tipo}<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Bicicleta que hereda de Vehiculo
class Bicicleta extends Vehiculo {
    constructor(marca, tipo, material) {
        super(marca, tipo);  // Usamos "tipo" como "modelo" para Bicicleta
        this.material = material;
    }

    descripcion() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "Soy una bicicleta veloz<br>";
        output.innerHTML += `Marca: ${this.marca}<br>`;
        output.innerHTML += `Tipo: ${this.modelo}<br>`;  // Aquí "modelo" representa el tipo de bicicleta
        output.innerHTML += `Material: ${this.material}<br>`;
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Función que muestra la descripción de cualquier tipo de vehículo
function mostrarDescripcion(vehiculo) {
    vehiculo.descripcion();
}

// Instancias de cada clase
const vehiculoCarro = new Carro("Ford", "Mustang", "Negro");
const vehiculoMoto = new Moto("Harley-Davidson", "Street Glide", "Moto cruiser");
const vehiculoBicicleta = new Bicicleta("Cannondale", "Hibrida", "Aluminio");

// Llamado al método descripcion para cada vehículo
mostrarDescripcion(vehiculoCarro);
mostrarDescripcion(vehiculoMoto);
mostrarDescripcion(vehiculoBicicleta);
