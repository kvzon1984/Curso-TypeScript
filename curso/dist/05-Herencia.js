"use strict";
class DatosBasicos {
    constructor(name, descripcion, created_at, created_by) {
        this.name = name;
        this.descripcion = descripcion;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDescripcion() {
        return this.name + ' ' + this.descripcion;
    }
}
class Productos extends DatosBasicos {
    constructor(stock, sku, name, descripcion, created_at, created_by) {
        super(name, descripcion, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDescripcion() {
        super.created_by;
        return 'Producto: ' + super.fullDescripcion;
    }
    guardar() {
        console.log('Guardando Productos');
    }
}
let producto1 = new Productos(10, 1, 'Televisor HD', 'Plana', new Date(), '1');
console.log(producto1);
console.log(producto1.fullDescripcion);
class Categoria extends DatosBasicos {
    constructor(name, descripcion, created_at, created_by) {
        super(name, descripcion, created_at, created_by);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDescripcion() {
        return 'Categoria: ' + super.fullDescripcion;
    }
    guardar() {
        console.log('Guardando Categorias');
    }
}
let categoria = new Categoria('Tecnologia', 'Audio visual', new Date(), '1');
console.log(categoria.fullYear);
categoria.agregarProducto(producto1);
console.log(categoria);
console.log(categoria.fullDescripcion);
//# sourceMappingURL=05-Herencia.js.map