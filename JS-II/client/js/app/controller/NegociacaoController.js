class NegociacaoController{

    constructor(){
        // O bind é realizado para não desvincular o querySelector da sua classe base no caso document
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');

        this._negociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._negociacoes.negociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));       
        this._mensagemView.update(this._mensagem);
    }

    adicionar(event){
        event.preventDefault();

        this._negociacoes.adicionar(this._criarNovaNegociacao());
        
        this._negociacoesView.update(this._negociacoes.negociacoes);

        this._mensagem._mensagem = 'Negociação adicionada com sucesso.';
        this._mensagemView.update(this._mensagem);
        
        this._limparCamposInput();
    }

    // Metodos privados
    _criarNovaNegociacao(){
        return new Negociacao(
            DataHelper.textoParaData(this._data.value), 
            this._quantidade.value, 
            this._valor.value
        );
    }

    _limparCamposInput(){
        this._data.value = ''; 
        this._quantidade.value = 1; 
        this._valor.value = 0.0;

        this._data.focus();
    }
}