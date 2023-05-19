/*
    Clase Producto
        propiedades
        -name
        -descripcion
        -sku
        -stock
        -created_at
        -created_by

    clase Categoria
        propiedades
        -name
        -descripcion
        -created_at
        -created_by
*/


abstract class DatosBasicos { //! al poner el abstract esto nos ayuda que no pueda instanciar la clase DatosBasicos (Esto es una clase abstracta)
    constructor(
        public name: string,
        public descripcion: string,
        private created_at: Date, //! solo tiene acceso la clase en si
        protected created_by: string, //! Tiene acceso la clase y la clase de extiende de esta, anteponiendo la palabra super.
    ) { }

    get fullYear(): number {
        return this.created_at.getFullYear()
    }

    get fullDescripcion() {
        return this.name + ' ' + this.descripcion
    }

    abstract guardar(): void; //! Al crear un metodo abstracto debemos implementar este metodo en todas las clases que extiendan de la clase DatosBasicos
}

class Productos extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        descripcion: string,
        created_at: Date,
        created_by: string,
    ) {
        super(name, descripcion, created_at, created_by)
    }

    override get fullDescripcion(): string {
        super.created_by
        return 'Producto: ' + super.fullDescripcion
    }

    guardar(): void {
        console.log('Guardando Productos');
    }
}

let producto1 = new Productos(
    10,
    1,
    'Televisor HD',
    'Plana'
    , new Date(),
    '1'
)

console.log(producto1);
console.log(producto1.fullDescripcion);

class Categoria extends DatosBasicos {
    public productos: Productos[] = []
    constructor(
        name: string,
        descripcion: string,
        created_at: Date,
        created_by: string,
    ) {
        super(name, descripcion, created_at, created_by)
    }

    agregarProducto(producto: Productos) {
        this.productos.push(producto)
    }

    override get fullDescripcion(): string {
        return 'Categoria: ' + super.fullDescripcion
    }

    guardar(): void {
        console.log('Guardando Categorias');
    }
}

let categoria = new Categoria(
    'Tecnologia',
    'Audio visual',
    new Date(),
    '1',

)

console.log(categoria.fullYear);

categoria.agregarProducto(producto1)

console.log(categoria);
console.log(categoria.fullDescripcion);
