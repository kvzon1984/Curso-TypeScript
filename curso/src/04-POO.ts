/* LAS CLASES ESTAN COMPUESTASZ POR PROPIEDADES (VARIABLES) Y METODOS (FUNCIONES) */

// class Personaje {
//     //Propiedades
//     readonly id: number
//     name: string
//     nivel: number
//     private _hp: number
//     profesion?: string

//     constructor(id: number, name: string, nivel: number, _hp: number) {
//         this.id = id
//         this.name = name
//         this.nivel = nivel
//         this._hp = _hp
//     }

//     // Metodos

//     subirNivel(): number {
//         this.nivel = this.nivel++
//         return this.nivel
//     }

//     cambiarHp(cantidad: number): number {
//         this._hp = this._hp + cantidad
//         return this._hp
//     }
// }

// Simpificando (REFACTOR) la clase Personaje

class Personaje {

    profesion?: string
    private static _equipo: number = 1

    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number) {
    }

    subirNivel(): number {
        this.nivel = this.nivel++
        return this.nivel
    }

    cambiarHp(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }

    static agregarPersonajeEquipo(): void {
        Personaje._equipo++
    }

    static get equipo(): number{
        return Personaje._equipo
    }

    // getHP(): number {
    //     return this._hp
    // }

    get hp(): number {
        return this._hp
    }

    // LO IDEAL ES QUE NO SE OCUPE EL SETTER PARA REAL;IZAR UN CAMBIO EN LA PROPIEDAD, PARA ESO ES MEJOR
    // OCUPAR UN METODO, LO MEJOR ES OCUPAR LOS SETTER PARA VALIDAR EL VALOR DE DICHA PROPIEDAD
    set hp(cantidad: number) {
        this._hp = this._hp + cantidad
    }


}

const personaje = new Personaje(
    1,
    'Isaac',
    1,
    100,

)

personaje.cambiarHp(-10)
console.log(personaje);

if (personaje instanceof Personaje) {
    console.log(personaje instanceof Personaje);
}

personaje.profesion = 'Justiciero'

const personaje1 = new Personaje(2, 'Carlos', 1, 100)
Personaje.agregarPersonajeEquipo()

console.log('_equipo', Personaje.equipo);

console.log(personaje, personaje1);
console.log(personaje.hp);

personaje.hp = -10
console.log(personaje.hp);

