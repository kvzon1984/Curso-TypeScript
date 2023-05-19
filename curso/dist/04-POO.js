"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel++;
        return this.nivel;
    }
    cambiarHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    static agregarPersonajeEquipo() {
        Personaje._equipo++;
    }
    static get equipo() {
        return Personaje._equipo;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
}
Personaje._equipo = 1;
const personaje = new Personaje(1, 'Isaac', 1, 100);
personaje.cambiarHp(-10);
console.log(personaje);
if (personaje instanceof Personaje) {
    console.log(personaje instanceof Personaje);
}
personaje.profesion = 'Justiciero';
const personaje1 = new Personaje(2, 'Carlos', 1, 100);
Personaje.agregarPersonajeEquipo();
console.log('_equipo', Personaje.equipo);
console.log(personaje, personaje1);
console.log(personaje.hp);
personaje.hp = -10;
console.log(personaje.hp);
//# sourceMappingURL=04-POO.js.map