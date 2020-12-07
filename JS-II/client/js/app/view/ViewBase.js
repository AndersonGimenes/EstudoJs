class ViewBase{
    constructor(elemento){
        this._elemento = elemento;
    }

    update(mensagem){
        this._elemento.innerHTML = this._template(mensagem);
    }
}