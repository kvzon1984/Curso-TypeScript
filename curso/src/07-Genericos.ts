function log<V, T>(a: V, b: T): T {
    console.log(a, b);
    return b
}

log<string, number>('dato', 42)
log<string, string>('dato', 'Hola mundo')

async function fetchData<T>(recurso: string): Promise<T>{
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string
}

async function main() {
    const usuario = await fetchData<User>('/usuarios')
    usuario.id
}

//! Genericos en clases

type Computador = {
    apagar: () => void
    encender: () => void
}

class Programador <T> {
    computador: T;
    constructor(t: T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({ apagar: () => { }, encender: () => { } })

programador.computador.apagar()

const programador1 = new Programador<string>('Hola mundo')

programador1.computador

//! Genericos en Interfaces

// interface KeyValue<T, V> {
//     key: T,
//     value: V
// }

type KeyValue<T, V> = {
    key: T,
    value: V
}

interface Producto {
    id: string
}

function fetchProduct(): KeyValue<string, Producto> {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id de producto',
        value: 500
    }
}

// Contrainsts (Restricciones)
//! al poner estre los <> la palabra extends y un tipo lo que se hace es restringir
//!! el tipo de dato que quiero que mi funcion reciba

// function print<T extends boolean>(t: T): T {
//     console.log(t);

//     return t
// }

// print(45) // Da errror ya que le estoy pasando un tipo number y recine un boolean
// print(false)

interface Empleado {
    id: string
}

function print<T extends Empleado>(t: T): T {
    console.log(t);

    return t
}

print({ id: '1' })

// Genericos y Herencias

//! Pasar generico
class Estado<T> {
    protected data: T[] = []

    agregar(t: T): void {
        this.data.push(t)
    }

    getData(): T[] {
        return this.data
    }
}

//! Pasar generico con restricciones

class EliminarEstado<T extends { id: string }> extends Estado<T> {
    eliminar(id: string) {
        this.data.filter( d => d.id !== id)
    }
}

//! Pasar generico fijo
class EstadoEmpleados extends Estado<Empleado>{
    recetearEmpleados() {
        // aca la logica
    }
}

// keyOf

type Calendar = {
    id: string,
    fuente: string,
    duenio: string
}

const calendar: Calendar = { id: '1', fuente: 'Google', duenio: 'Isaac' }

//! keyof lo que hace es que verifica que las key esten dentro del generico pasado en este caso el objeto calendario

function getProp<T>(objeto: T, property: keyof T): unknown{
    return objeto[property]
}

getProp<Calendar>(calendar, 'duenio')
getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
// getProp<Calendar>(calendar, 'propiedadesQueNoExisten') //! da error ya la propiedad no existe en calendario cono clave

// Utility Types
//! estos son tipos que no podrian ayudar a crear nuevos tipos en base a unos ya existentes

type Punto = {
    x: number,
    y: number,
    desc?:string,
}

// type PuntoOpcional = {
//     x?: number,
//     y?: number,
//     desc?:string,
// }

type PuntoOpcional = Partial<Punto> //! esto es lo mismo que en la linea 161 todas las propiedades son opcionales
type PuntoRequeridas = Required<Punto> //! esto es lo mismo que en la linea 161 todas las propiedades son requeridas

const keyVal: Record<string, number> = { // es lo mismo que esto type kv = { [key:string]: number }
    'Soy un generico': 42
}

const p: Omit<Punto, 'desc' | 'y'> = {
    x: 1,
    // y: 2
}

const p1: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 2
}

const readOnlyP: Readonly<Punto> = {
    x: 1,
    y: 2,
    desc: 'Soy una descripcion'
}



