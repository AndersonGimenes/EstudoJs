class Negociacao{

    constructor(data, quantidade, valor){
        //cria uma nova instancia de data para que não seja alterado a data da referencia antiga
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        
        // congela o objeto para que não seja alterado a não ser quando instancia pela pela primeira vez
        Object.freeze(this);
    }

    get data(){
        //retorna uma nova instancia de data para que não seja alterado a data da referencia antiga
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}