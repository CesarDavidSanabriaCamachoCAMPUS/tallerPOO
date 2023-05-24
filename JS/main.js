// talleres nivel basico para la practica de POO (Programacion orientada a objetos)
// Cesar David Sanabria Camacho
// 24-05-2023

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



const persona1 = new Persona(data)

console.log(persona1.saludar())