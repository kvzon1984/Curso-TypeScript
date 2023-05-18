"use strict";
let puntaje = 98;
puntaje = 'Hola mundo';
let animal = { id: 1, estado: '', name: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
const product = {
    created_at: '',
    modified_at: '',
    name: '',
};
const nFibonachi = 8;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(undefined);
console.log(n);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    };
}
const user = getUser(5);
console.log(user === null || user === void 0 ? void 0 : user.created_at);
const arr1 = null;
arr1 === null || arr1 === void 0 ? void 0 : arr1[0];
const fn5 = null;
fn5 === null || fn5 === void 0 ? void 0 : fn5();
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
const difficulty = null;
const user2 = {
    username: 'Kvzon',
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1
};
console.log(user2);
const elemento = null;
const elemento1 = elemento;
const input = document.getElementById('username');
const input2 = document.getElementById('username');
//# sourceMappingURL=03-TiposAvanzados.js.map