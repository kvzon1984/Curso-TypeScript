//! PARA OCUPAR UNA INTERFAZ SIEMPRE Y CUANDO NO TENGAMOS QUE COMPARTIR LOGICA PERO SI NECESITAMOS IMPLEMENTAR LOS METODOS Y PROPIEDADES 
//! ES AHI DONDE SE OCUPA LA INTERFAZ

interface Animales {
    name: string

    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animales {
    name: string = 'Rocinante'

    caminar() {
        console.log('Caminando');
    }

    onomatopeya(): string {
        return 'hin'
    }
}

class Cerdo implements Animales {
    name: string = 'Chancho'

    caminar() {
        console.log('Caminando');
    }

    onomatopeya(): string {
        return 'oinc'
    }
}

//! Index signature

class DiccionarioUsuarios {
    [id:string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()

diccionarioUsuarios['a1'] = 'Usuario 1'
diccionarioUsuarios['1a'] = 'Usuario 2'
diccionarioUsuarios['2b'] = 'Usuario 3'
diccionarioUsuarios.b2 = 'Usuario 3'

console.log(diccionarioUsuarios);
