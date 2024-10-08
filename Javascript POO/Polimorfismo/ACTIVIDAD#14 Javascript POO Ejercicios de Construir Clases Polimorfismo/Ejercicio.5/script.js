// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Profesional
class Profesional {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }

    trabajar() {
        // Método vacío que será implementado en las subclases
    }
}

// Clase Médico que hereda de Profesional
class Medico extends Profesional {
    constructor(nombre, especialidad, hospital) {
        super(nombre, especialidad);
        this.hospital = hospital;
    }

    trabajar() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += `Soy el Dr. ${this.nombre}, un médico especializado en ${this.especialidad}.<br>`;
        output.innerHTML += `Trabajo en el hospital: ${this.hospital}.<br>`;
        output.innerHTML += "Realizo la anestesia, que permite al paciente recibir el tratamiento y las correcciones quirúrgicas necesarias para la recuperación de su salud.<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Ingeniero que hereda de Profesional
class Ingeniero extends Profesional {
    constructor(nombre, especialidad, empresa) {
        super(nombre, especialidad);
        this.empresa = empresa;
    }

    trabajar() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += `Soy ${this.nombre}, una ingeniera especializada en lo ${this.especialidad}.<br>`;
        output.innerHTML += `Trabajo en la empresa: ${this.empresa}.<br>`;
        output.innerHTML += "Me encargo de la optimización de los procesos de una empresa, para aumentar la productividad de una organización.<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Clase Docente que hereda de Profesional
class Docente extends Profesional {
    constructor(nombre, especialidad, escuela) {
        super(nombre, especialidad);
        this.escuela = escuela;
    }

    trabajar() {
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += `Soy la profesora ${this.nombre}, una docente especializada en ${this.especialidad}.<br>`;
        output.innerHTML += `Trabajo en la escuela: ${this.escuela}.<br>`;
        output.innerHTML += "Ayudo a los niños a desarrollar hábitos saludables, les enseño a mantenerse activos y los preparo para la actividad física futura, lo que puede ayudarles a mantenerse sanos de por vida.<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
        output.innerHTML += "---------------------------------------------------------------------------------------------------------------------------------<br>";
    }
}

// Función que muestra la descripción de cualquier tipo de profesional
function mostrarProfesional(profesional) {
    profesional.trabajar();
}

// Instancias de cada clase
const profesionalMedico = new Medico("Edgardo Alvarez", "Anestesiología", "Clínica Santa María SAS");
const profesionalIngeniero = new Ingeniero("Saireth Tovar", "Industrial", "Industrias Refridcol S A S");
const profesionalDocente = new Docente("Brenda Luna", "Educación física", "I.E Antonio Lenis");

// Llamado al método trabajar para cada profesional
mostrarProfesional(profesionalMedico);
mostrarProfesional(profesionalIngeniero);
mostrarProfesional(profesionalDocente);
