/* LAS CLASES ESTAN COMPUESTASZ POR PROPIEDADES (VARIABLES) Y METODOS (FUNCIONES) */

class Personaje {
    //Propiedades
    readonly id: number
    name: string
    nivel: number
    private _hp: number
    profesion?: string

    constructor(id: number, name: string, nivel: number, _hp: number) {
        this.id = id
        this.name = name
        this.nivel = nivel
        this._hp = _hp
    }

    // Metodos

    subirNivel(): number {
        this.nivel = this.nivel++
        return this.nivel
    }

    cambiarHp(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }
}

const personaje = new Personaje(
    158895250,
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

console.log(personaje);

console.log('Pruba');


