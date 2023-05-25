// talleres nivel basico para la practica de POO (Programacion orientada a objetos)
// Cesar David Sanabria Camacho
// 24-05-2023

let output1 = document.querySelector(".output1")

let form1 = document.querySelector(".form1")
form1.addEventListener("submit", (e)=>{
    e.preventDefault()

    let data = Object.fromEntries(new FormData(e.target))

    const persona1 = new Persona(data)
    const estudiante1 = new Estudiante(data)

    const div = document.createElement('div');
    div.setAttribute('class', 'output1Saludo');

    div.innerHTML = `
        <p>${persona1.saludar()}</p>
        <p>${estudiante1.estudia()}</p>
        `
    output1.appendChild(div)

})

class Persona{
    nombre
    edad
    sexo

    constructor ({nombre, edad, sexo}){
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
    }

    saludar(){
        return `Hola, soy ${this.nombre}`;
    }
}

class Estudiante extends Persona{
    constructor({nombre, edad, sexo, carrera}){
        super({nombre, edad, sexo})
        this.carrera = carrera
    }
    
    estudia(){
        return `Mi carrera es ${this.carrera}`;
    }
}