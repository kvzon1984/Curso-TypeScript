"use strict";
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
console.log(extincionDinosaurios, dinosaurioFavorito, extintos);
function getname(nombre) {
    return nombre;
}
console.log(getname('Luis'));
let animales = ['perro', 'gato', 'leon'];
let numeros = [1, 2, 3];
let numeros2 = [];
let checks = [];
console.log(numeros, numeros2, checks);
animales.map(x => x.length);
let tupla = [1, ['Felipe', 'Lucas']];
console.log(tupla);
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Mediana;
console.log(variable1);
const estado = 2;
console.log(estado);
const objeto = {
    id: 1,
    edad: 38,
    nombre: 'Isaac',
    talla: Talla.Grande,
    direccion: {
        numero: 1190,
        calle: 'Mirador del maipo',
        comuna: 'Puente Alto',
        pais: 'Chile'
    }
};
const objeto2 = {
    id: 2,
    edad: 40,
    nombre: 'Carla',
    talla: Talla.Grande,
    direccion: {
        numero: 1190,
        calle: 'Mirador del maipo',
        comuna: 'Puente Alto',
        pais: 'Chile'
    }
};
const arr = [];
arr.push(objeto);
arr.push(objeto2);
console.log(arr);
const fn = (edad) => {
    if (edad < 17) {
        return 'No puedes ingresar';
    }
    return 'Puedes ingresar';
};
console.log(fn(32));
function validaEdad(edad, msg = 'No hay nombre') {
    if (edad < 17) {
        return `${msg}, No puedes ingresar`;
    }
    return `Bienvenido, Puedes ingresar ${msg}`;
}
console.log(validaEdad(18, 'Isaac'));
function ErrorUsuario() {
    throw new Error('error de usuario');
}
//# sourceMappingURL=02-TiposBasicos.js.map