class MensagemView extends ViewBase{
    
    constructor(elemento){
        // Mesma ideia do base c#
        super(elemento)
    }

    // private
    _template(mensagemModel){
        return mensagemModel.mensagem ? `<p class="alert alert-info">${mensagemModel.mensagem}</p>` : '<p></p>'
    }
}