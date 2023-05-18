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
}
const personaje = new Personaje(158895250, 'Isaac', 1, 100);
personaje.cambiarHp(-10);
console.log(personaje);
if (personaje instanceof Personaje) {
    console.log(personaje instanceof Personaje);
}
personaje.profesion = 'Justiciero';
console.log(personaje);
console.log('Pruba');
//# sourceMappingURL=04-POO.js.map