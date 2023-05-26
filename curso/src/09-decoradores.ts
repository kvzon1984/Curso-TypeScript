// Los decoradores son funciones que podemos colocar antes de la definicion de una clase o tambien de otras funciones o propiedades

// y de esta manera agregar, modificar o reemplazar las funcionalidades

// Antes de utiulizar los decoradores se debe descomentar en el tsconfig la opcion

function Route(ruta: string) {
    return (constructor: Function) => {
        console.log('Ejecutando el deecorador de la ruta');
        constructor.prototype.route = ruta
    }

}

//! Recibe tres argumentos y siempre recibe los mismos
//* target: hace referencia al constructor de la clase o al prototipo de la clase
//* methodName: el nombre del metodo de tipo string
//* descriptor: PropertyDescriptor

function Method(method: string) {
    return (target: any, methodName: string, descriptor:PropertyDescriptor ) => {
        console.log(methodName, descriptor);
        const original = descriptor.value
        descriptor.value = function (...arg: any) {
            console.log('Antes del metodo');
            original.call(this, ...arg)
            console.log('Despues del metodo');
        }
    }

}

@Route('/product')
class Producto {
    @Method('GET')
    find(val: string) {
        console.log('soy el metodo find' + val);
    }
}

const producto = new Producto() as any

console.log(producto.route);
producto.find(' Hola mundo')



//! -------- decoradores a los getter y setters------

function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    console.log(methodName, propertyDescriptor);
    const original = propertyDescriptor.get
    propertyDescriptor.get = function () {
        const r = original?.call(this)
        if (typeof r === 'string') {
            return r.toUpperCase()
        }
        return r
    }
}

class User {
    constructor(public name: string, public lastmane: string) { }

    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastmane}`
    }
}

const user = new User('Isaac', 'Vega')
console.log(user.fullName);


//! -------- decoradores de propiedades ------

function Min(min: number) {
    return (target: any, propertyName: string) => {
        let val: string
        const descriptor: PropertyDescriptor = {
            get() {
                return val
            },
            set(v: string) {
                if (v.length < min) {
                    throw new Error(`La propiedad ${propertyName} de tener como minimo un largo de ${min} caracteres`);
                }
                val = v
            },
        }
        Object.defineProperty(target, propertyName, descriptor)
    }
}

class Users {
    @Min(6)
    public password: string

    constructor(public name: string, public lastmane: string, password: string) {
        this.password = password
    }

    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastmane}`
    }
}

const u = new Users('Isaac', 'Vega', '123456')
console.log(u.password);

// ------ orden de ejecucion de los decoradores ----

// Los decoradores siempre se ejecutaran desde abajo hacia arriba

function Dec1( constructor: Function) {
    console.log(' Decorador 1');
}

function Dec2( constructor: Function) {
    console.log(' Decorador 2');
}

@Dec1
@Dec2
class Usuario { }

console.log(Usuario);



export {}
