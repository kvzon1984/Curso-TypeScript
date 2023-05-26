"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Route(ruta) {
    return (constructor) => {
        console.log('Ejecutando el deecorador de la ruta');
        constructor.prototype.route = ruta;
    };
}
function Method(method) {
    return (target, methodName, descriptor) => {
        console.log(methodName, descriptor);
        const original = descriptor.value;
        descriptor.value = function (...arg) {
            console.log('Antes del metodo');
            original.call(this, ...arg);
            console.log('Despues del metodo');
        };
    };
}
let Producto = class Producto {
    find(val) {
        console.log('soy el metodo find' + val);
    }
};
__decorate([
    Method('GET')
], Producto.prototype, "find", null);
Producto = __decorate([
    Route('/product')
], Producto);
const producto = new Producto();
console.log(producto.route);
producto.find(' Hola mundo');
function UpperCase(target, methodName, propertyDescriptor) {
    console.log(methodName, propertyDescriptor);
    const original = propertyDescriptor.get;
    propertyDescriptor.get = function () {
        const r = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof r === 'string') {
            return r.toUpperCase();
        }
        return r;
    };
}
class User {
    constructor(name, lastmane) {
        this.name = name;
        this.lastmane = lastmane;
    }
    get fullName() {
        return `${this.name} ${this.lastmane}`;
    }
}
__decorate([
    UpperCase
], User.prototype, "fullName", null);
const user = new User('Isaac', 'Vega');
console.log(user.fullName);
function Min(min) {
    return (target, propertyName) => {
        let val;
        const descriptor = {
            get() {
                return val;
            },
            set(v) {
                if (v.length < min) {
                    throw new Error(`La propiedad ${propertyName} de tener como minimo un largo de ${min} caracteres`);
                }
                val = v;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Users {
    constructor(name, lastmane, password) {
        this.name = name;
        this.lastmane = lastmane;
        this.password = password;
    }
    get fullName() {
        return `${this.name} ${this.lastmane}`;
    }
}
__decorate([
    Min(6)
], Users.prototype, "password", void 0);
__decorate([
    UpperCase
], Users.prototype, "fullName", null);
const u = new Users('Isaac', 'Vega', '123456');
console.log(u.password);
function Dec1(constructor) {
    console.log(' Decorador 1');
}
function Dec2(constructor) {
    console.log(' Decorador 2');
}
let Usuario = class Usuario {
};
Usuario = __decorate([
    Dec1,
    Dec2
], Usuario);
console.log(Usuario);
//# sourceMappingURL=09-decoradores.js.map