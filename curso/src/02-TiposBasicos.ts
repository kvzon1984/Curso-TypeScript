/*
    TIPOS DE DATOS JS
        number
        string
        boolean
        null
        undefined
        object
        function

    TIPOS DE DATOS TS
        any -> TRATAR DENO USARLO
        unknown
        never
        arrays
        tuplas
        Enums

    TIPOS INFERIDOS
*/

let extincionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos: boolean = true

console.log(extincionDinosaurios, dinosaurioFavorito, extintos);


function getname(nombre: string) {
    return nombre
}

console.log(getname('Luis'));




let animales: string[] = ['perro', 'gato', 'leon']
let numeros: number[] = [1, 2, 3]
let numeros2: Array<number> = []
let checks: boolean[] = []
console.log(numeros, numeros2, checks);


animales.map(x => x.length)

/* T U P L A S */

//! ES UNA VARIABLE QUE CONTIENEN UN SET DE DATOS QUE SE ENCUENTRA ORDENADOS
//! NOS PERMITEN GUARDAR DATOS SIEMPRE Y CUANDO SE ENCUENTREN DEFINIDOS.

let tupla: [number, string[]] = [1, ['Felipe', 'Lucas']]
console.log(tupla);


/* E N U M S */

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }

const variable1 = Talla.Mediana
console.log(variable1);

const enum LoadingState { Idle, Loading, Succes, Error }

const estado = LoadingState.Succes
console.log(estado);

/* O B J E T O S */

type Direccion = {
        numero: number,
        calle: string,
        comuna: string,
        pais: string
    }

type Persona = {
    readonly id: number, //! Al poner un readonly le decimos que este valor en inmutable
    nombre?: string, //! El poner un signo de interrogacion le decimos que es opcional
    edad: number,
    talla: Talla,
    direccion: Direccion
}

const objeto: Persona= {
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
}

const objeto2: Persona = {
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
}

const arr: Persona[] = []

arr.push(objeto)
arr.push(objeto2)

console.log(arr);


/* F U N C I O N E S */

const fn: (a: number) => string = (edad: number) => {
    if (edad < 17) {
        return 'No puedes ingresar'
    }
    return 'Puedes ingresar'
}

console.log(fn(32));

function validaEdad( edad: number, msg: string = 'No hay nombre'): string {
    if (edad < 17) {
        return `${msg}, No puedes ingresar`
    }
    return `Bienvenido, Puedes ingresar ${msg}`
}

console.log( validaEdad(18, 'Isaac') );

/* Tipo de retorno en funciones NEVER */

function ErrorUsuario(): never{
    throw new Error('error de usuario')
}