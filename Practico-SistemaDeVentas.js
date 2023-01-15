/***
 * estepractico constará de 2 clases, un Producto y una Orden
 * 
 */

class Producto{
    static _incrementID = 0; 
    _idProducto = 0;
    _nombre = '';
    _precio = 0;
    
    get getidProducto(){
        return this._idProducto;
    }
    set setidProducto(idProducto){
        return this._idProducto = idProducto;
    }
    get getnombre(){
        return this._nombre;
    }
    set setnombre(nombre){
        return this._nombre = nombre;
    }
    get getprecio(){
        return this._precio;
    }
    set setprecio(precio){
        let salida = 0;
        if (!isNaN(Number(precio))) {
            //console.log('Precio: ' + precio +' Ingresado');
            salida = Number(precio);
        } else {
            //console.log('Error al ingresar el precio');
            salida = 0;
        }
        return this._precio = salida;
    }

    constructor(nombre,precio){
        this.setidProducto = ++Producto._incrementID;
        this.setnombre = nombre;
        this.setprecio = precio;
    }

    //sobrescritura

    detalleProducto(){
        return `
                idProducto = ${this.getidProducto}
                nombre = ${this.getnombre}
                precio = ${this.getprecio}`
    }
    toString(){
        return this.detalleProducto();
    }
}

class Orden{
    static _incrementIDProducto = 0;
    static getMaxProductos(){
        return 5;
    }
    _idOrden = 0;
    _productos = [];
    _cantProductosAgregados = 0;

    constructor(){
        this._idOrden = ++Orden._incrementIDProducto;
        this._productos = [];
        this._cantProductosAgregados = 0;
    }

    get getidOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (  this._productos.length < Orden.getMaxProductos() ) {
            console.log('Producto agregado con éxito!');
            this._productos.push(producto);
        }else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotalVenta(){
        let sumaTotalVenta = 0;
        for(let producto of this._productos){
           // console.log(typeof producto.getprecio);
            sumaTotalVenta += producto.getprecio;
        }
        return sumaTotalVenta;
    }

    mostrarOrden(){
        let detalle = '';
        this._productos.forEach(producto => {
            detalle += producto.toString()
        });
        detalle += ' Total Venta: '+ this.calcularTotalVenta();
        return detalle;
    }

    //sobreEscritura
    toString(){
        return this.mostrarOrden();
    }
};


let naranja = new Producto('Naranja', '4000');
let pina = new Producto('Pina', 8000)

//console.log(naranja.toString());

let boleta1 = new Orden();

boleta1.agregarProducto(naranja);
boleta1.agregarProducto(pina);
boleta1.agregarProducto(naranja);
boleta1.agregarProducto(pina);
boleta1.agregarProducto(pina);


console.log(boleta1.toString());
console.log(boleta1._productos.length);
