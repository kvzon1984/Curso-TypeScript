
/* U N I O N    T Y P E */
//! es cuando nos podemos referir con mas de un tipo hacia una variable

let puntaje: number | string = 98

puntaje = 'Hola mundo'

type Animal = {
    id: number,
    estado: string
}

type Usuario = {
    id: number,
    name: string
}

let animal: Animal | Usuario = { id: 1, estado: '', name: '' }

function sumaDos(n: number | string): number {
    if (typeof n === 'number') {
        return n + 2
    }

    return parseInt(n) + 2
}

/* I N T E R S E C T I O N    T Y P E */

type Audit = {
    created_at: string,
    modified_at : string
}

type Product = {
    name: string
}

const product: Audit & Product = {
    created_at: '',
    modified_at: '',
    name: '',
}

/* L I T E R A L    T Y P E */
//! los tipos literales nos sirve para asignar un valor determinado

type Fibo = 0 | 1 | 2 | 3 | 5 | 8

const nFibonachi: Fibo = 8

/* N U L L A B L E    T Y P E */

function toNumber(s:string | null | undefined) {
    if (!s) {
        return 0
    }
    return parseInt(s)
}

const n = toNumber(undefined)
console.log(n);

/* O P T I O N A L    C H A I N    O P E R A T O R */
//! Este se puede ocupar en tres instancias

function getUser(id:number) {
    if (id < 0) {
        return null
    }

    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    }
}

const user = getUser(5)

console.log(user?.created_at);

const arr1 = null

arr1?.[0]

const fn5: any = null

fn5?.()

console.log(fn5?.());

// N U L L I S H    C O A L E S C I N G    O P E R A T O R

const difficulty: number | null = null

const user2 = {
    username: 'Kvzon',
    difficulty: difficulty ?? 1
}

console.log(user2);

// T Y P E    A S S E R T I O N
//! usarlo solo en el caso de que estemos seguros de el dato que vamos a recibir

const elemento: any = null

const elemento1 = elemento as number

const input = document.getElementById('username') as HTMLInputElement
const input2 = <HTMLInputElement> document.getElementById('username')

// T Y P E    N A R R O W I N G


