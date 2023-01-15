/**
 * Ejercicio de clases
 */

 imprimir = function(palabra){
    console.log(palabra);
};

class Persona{
    static contadorID = 0;
    _idPersona= 0;
    _idDocumento = '';
    _rutPersona = '';
    _nombrePersona = '';
    _apellidoPersona = '';

    constructor (idDocumento,rutPersona,nombrePersona,apellidoPersona){
        this.setidPersona = Persona.contadorID++;
        this.setidDocumento = idDocumento;
        this.setrutPersona = rutPersona;
        this.setnombrePersona = nombrePersona;
        this.setApellidoPersona = apellidoPersona;
    };

    //getters
    get getidPersona(){
        return this._idPersona;
    };
    get getidDocumento(){
        return this._idDocumento;
    };
    get getrutPersona(){
        return this._rutPersona;
    };
    get getnombrePersona(){
        return this._nombrePersona;
    };
    get getApellidoPersona(){
        return this._apellidoPersona;
    };
    
    //setters
    set setidPersona(idPersona){
        return this._idPersona = idPersona;
    };
    set setidDocumento(idDocumento){
        return this._idDocumento = idDocumento;
    };
    set setrutPersona(rutPersona){
        return this._rutPersona = rutPersona;
    };
    set setnombrePersona(nombrePersona){
        return this._nombrePersona = nombrePersona;
    };
    set setApellidoPersona(apellidoPersona){
        return this._apellidoPersona = apellidoPersona;
    };

}

class Empleado extends Persona{
    static contadorIdEmpleado = 0;
    _idEmpleado = 0;
    _sueldoEmpleado = 0;

    constructor(idDocumento,rutPersona,nombrePersona,apellidoPersona,sueldoEmpleado){

        super(idDocumento,rutPersona,nombrePersona,apellidoPersona);
        this.setidEmpleado = Empleado.contadorIdEmpleado++;
        this.setsueldoEmpleado = sueldoEmpleado;
    }

    get getidEmpleado(){
        return this._idEmpleado;
    }
    get getsueldoEmpleado(){
        return this._sueldoEmpleado;
    }
    set setidEmpleado(idEmpleado){
        return this._idEmpleado = idEmpleado;
    }
    set setsueldoEmpleado(sueldoEmpleado){
        let salida = 0;
        if(isNaN(Number(sueldoEmpleado))){
            salida = sueldoEmpleado;
        }else{
            imprimir('El valor ingresado no corresponde a un número');
        }
        this._sueldoEmpleado = salida;
        return this._sueldoEmpleado;
    }
}

class Cliente extends Persona{
    static contadorIdCliente = 0;
    _idCliente = 0;
    _fechaRegistro = '';

    constructor(idDocumento,rutPersona,nombrePersona,apellidoPersona,fechaRegistro){
        super(idDocumento,rutPersona,nombrePersona,apellidoPersona);
        this.setidCliente = Cliente.contadorIdCliente++;
        this.setfechaRegistro = fechaRegistro;
    }
    
    //getters
    get getidCliente(){
        return this._idCliente;
    }
    get getfechaRegistro(){
        return this._fechaRegistro;
    }

    //setters
    set setidCliente(idCliente){
        return this._idCliente = idCliente;        
    }
    set setfechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;        
    }
}

let primate = new Persona('515.404.915','18389381-5','Hans','Buker');
let primate2 = new Persona('515.404.913','18389381-5','Hans','Gutierrez');

imprimir(primate.getApellidoPersona);
imprimir(primate.getidPersona);
imprimir(primate2.getApellidoPersona);
imprimir(primate2.getidPersona);
