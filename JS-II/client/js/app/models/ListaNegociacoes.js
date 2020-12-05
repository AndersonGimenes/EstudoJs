class ListaNegociacoes{
    constructor() {
        this._negociacoes = []
    }

    adicionar(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        // retorna uma nova referencia de um novo array, mesmo que seja alterado a instancia antiga não afetara no novo retorno
        return [].concat(this._negociacoes);
    }
}