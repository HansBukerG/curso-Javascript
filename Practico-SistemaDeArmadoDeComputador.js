/*
*   Practico - Sistema de computador
*/

class DispositivoEntrada{
    _marca = '';
    _tipoEntrada = '';

    constructor(marca,tipoEntrada){
        this.set_marca = marca;
        this.set_tipoEntrada = tipoEntrada;
    }
    
    get get_marca(){
        return this._marca;
    }
    set set_marca(marca){
        return this._marca = marca;
    }
    
    get get_tipoEntrada(){
        return this._tipoEntrada;
    }
    set set_tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }
}

class Mouse extends DispositivoEntrada{
    static autoIncrementIdMouse = 0;
    _idMouse = 0;

    constructor(marca,tipoEntrada){
        super(marca,tipoEntrada);
        this.set_idMouse = ++Mouse.autoIncrementIdMouse;
    }

    get get_idMouse(){
        return this._idMouse;
    }

    set set_idMouse(idMouse){
        return this._idMouse = idMouse;
    }

    mostrarDispositivo(){
        return `
                ID: ${this.get_idMouse}
                Marca: ${this.get_marca}
                Entrada: ${this.get_tipoEntrada}
                `
    }
    //sobreEscritura
    toString(){
        return this.mostrarDispositivo();
    }

}

class Teclado extends DispositivoEntrada{
    static autoIncrementIdTeclado = 0;
    _idTeclado = 0;

    constructor(marca,tipoEntrada){
        super(marca,tipoEntrada);
        this.set_idTeclado = ++Teclado.autoIncrementIdTeclado;
    }

    get get_idTeclado(){
        return this._idTeclado;
    }

    set set_idTeclado(idTeclado){
        return this._idTeclado = idTeclado;
    }

    mostrarDispositivo(){
        return `
                ID: ${this.get_idTeclado}
                Marca: ${this.get_marca}
                Entrada: ${this.get_tipoEntrada}
                `
    }
    //sobreEscritura
    toString(){
        return this.mostrarDispositivo();
    }
}

class Monitor{
    static autoIncrement_IdMonitor = 0;
    _idMonitor= 0;
    _marca = '';
    _tamano = '';

    constructor(marca,tamano){
        this.set_idMonitor = ++Monitor.autoIncrement_IdMonitor; 
        this.set_marca = marca; 
        this.set_tamano = tamano; 
    }

    get get_idMonitor(){
        return this._idMonitor;
    };
    set set_idMonitor(idMonitor){
        this._idMonitor = idMonitor;
    }

    get get_marca(){
        return this._marca;
    };
    set set_marca(marca){
        this._marca = marca;
    }

    get get_tamano(){
        return this._tamano;
    };
    set set_tamano(tamano){
        this._tamano = tamano;
    }

    mostrarDispositivo(){
        return `
                ID: ${this.get_idMonitor}
                Marca: ${this.get_marca}
                Tamano: ${this.get_tamano}`;
    }

    //SobreEscritura
    toString(){
        return this.mostrarDispositivo();
    }

}

class Computadora {
    static autoIncrement_idComputador = 0;
    _idComputador = 0;
    _nombreComputador = '';
    _monitores = [];
    _teclado = [];
    _ratones = [];

    constructor(nombreComputador){
        this.set_idComputador = ++Computadora.autoIncrement_idComputador;
        this.set_nombreComputador = nombreComputador;
        this._monitores = [];
        this._teclados = [];
        this._ratones = [];
    }

    get get_idComputador(){
        return this._idComputador;
    }
    set set_idComputador(idComputador){
        return this._idComputador = idComputador;
    }

    get get_nombreComputador(){
        return this._nombreComputador;
    }
    set set_nombreComputador(nombreComputador){
        return this._nombreComputador = nombreComputador;
    }

    //Monitor 

    get get_monitores(){
        let salida = 'Sin  ocurrencias';
        console.log(this._monitores.length);
        if (this._monitores.length > 0) {
            this._monitores.forEach(monitor => {
               salida = ' '+ monitor.mostrarDispositivo();
            });
        }

        return salida;
    };

    set_monitores(monitor){
        this._monitores.push(monitor);
    };


    //Teclado
    set_teclados(teclado){
        this._teclados.push(teclado);
    };

    get get_teclados(){
        let salida = 'Sin  ocurrencias';
        if (this._teclados.length > 0) {
            this._teclados.forEach(teclado => {
                salida = teclado.toString();
            });
        }
        return salida;
    };
    //Mouse
    set_ratones(raton){
        this._ratones.push(raton);
    };

    get get_ratones(){
        let salida = 'Sin  ocurrencias';
        console.log(this._ratones.length);
        if (this._ratones.length > 0) {
            this._ratones.forEach(raton => {
                salida = raton.toString();
            });
        }
        return salida;
    };
    
    mostrarDispositivo(){
        let salida = '';

        //Agregar nombre Computador
        salida += ` 
                ID Computador: ${this.get_idComputador}
                Nombre Computador: ${this.get_nombreComputador}
                Monitor: ${this.get_monitores}
                Teclado: ${this.get_teclados}
                Raton: ${this.get_ratones}
            `
    return salida;
    }
    //sobreEscritura
    toString(){
        return this.mostrarDispositivo();
    }
}

class Orden{
    static autoIncrement_idOrden = 0;
    _idOrden = 0;
    _nombreCliente = '';
    _direccion = '';
    _computadoras = [];

    constructor(nombreCliente,direccion){
        this.set_idOrden = ++Orden.autoIncrement_idOrden;
        this.set_nombreCliente = nombreCliente;
        this.set_direccion = direccion;
        this._computadoras = [];
    }

    set set_idOrden(idOrden){
        return this._idOrden = idOrden;
    }
    get get_idOrden(){
        return this._idOrden;
    }

    set set_nombreCliente(nombreCliente){
        return this._nombreCliente = nombreCliente;
    }
    get get_nombreCliente(){
        return this._nombreCliente;
    }

    set set_direccion(direccion){
        return this._direccion = direccion;
    }
    get get_direccion(){
        return this._direccion;
    }

    set set_computadoras(computadoras){
        return this._computadoras.push(computadoras);
    }
    get get_computadoras(){
        let salida = '';
        let contador = 0;
        this._computadoras.forEach(element => {
            salida += 'Computador: ' + ++contador;
            salida += element.mostrarDispositivo() + ' ';
        });
        return salida;
    }
    
    agregarComputadora(computador){
        return this.set_computadoras = computador;
    }

    detalleOrden(){
        let salida = '';
        //Agregar nombre Computador
        salida += ` 
            ID Orden: ${this.get_idOrden}
            Nombre Cliente: ${this.get_nombreCliente}
            Direccion: ${this.get_direccion}
            Detalle Computador: ${this.get_computadoras}
            `
        return salida;
    }

}

let pantalla = new Monitor('Samsung', '15 pulgadas');
let teclado = new Teclado('Thermaltake', 'USB')
let raton = new Mouse('Logitech','USB');

//console.log(pantalla.toString());
//console.log(raton.toString());
//console.log(teclado.toString());

let computor = new Computadora('Hans');
computor.set_monitores(pantalla);
computor.set_teclados(teclado);
computor.set_ratones(raton);


//console.log(computor.mostrarDispositivo());

let boleta1 = new Orden('Hans Buker Gutierrez','EL maiten 2339, Chiguayante');
boleta1.agregarComputadora(computor);
boleta1.agregarComputadora(computor);

console.log(boleta1.detalleOrden());