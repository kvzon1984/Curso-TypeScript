"use strict";
class Caballo {
    constructor() {
        this.name = 'Rocinante';
    }
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'hin';
    }
}
class Cerdo {
    constructor() {
        this.name = 'Chancho';
    }
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'oinc';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['a1'] = 'Usuario 1';
diccionarioUsuarios['1a'] = 'Usuario 2';
diccionarioUsuarios['2b'] = 'Usuario 3';
diccionarioUsuarios.b2 = 'Usuario 3';
console.log(diccionarioUsuarios);
//# sourceMappingURL=06-Interfases.js.map