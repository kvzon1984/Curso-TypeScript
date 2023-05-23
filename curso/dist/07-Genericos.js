"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    console.log(a, b);
    return b;
}
log('dato', 42);
log('dato', 'Hola mundo');
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = yield fetchData('/usuarios');
        usuario.id;
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ apagar: () => { }, encender: () => { } });
programador.computador.apagar();
const programador1 = new Programador('Hola mundo');
programador1.computador;
function fetchProduct() {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    };
}
function fetchStock() {
    return {
        key: 'id de producto',
        value: 500
    };
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: '1' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getData() {
        return this.data;
    }
}
class EliminarEstado extends Estado {
    eliminar(id) {
        this.data.filter(d => d.id !== id);
    }
}
class EstadoEmpleados extends Estado {
    recetearEmpleados() {
    }
}
const calendar = { id: '1', fuente: 'Google', duenio: 'Isaac' };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, 'duenio');
getProp(calendar, 'id');
getProp(calendar, 'fuente');
const keyVal = {
    'Soy un generico': 42
};
const p = {
    x: 1,
};
const p1 = {
    x: 1,
    y: 2
};
const readOnlyP = {
    x: 1,
    y: 2,
    desc: 'Soy una descripcion'
};
//# sourceMappingURL=07-Genericos.js.map