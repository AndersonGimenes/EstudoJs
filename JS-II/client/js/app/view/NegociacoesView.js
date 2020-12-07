class NegociacoesView extends ViewBase{

    constructor(elemento){
        // Mesma ideia do base c#
        super(elemento)
    }

    // private
    _template(negociacoesModel){
            return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
        
                <tbody>
                    ${negociacoesModel.map((negociacao) =>
                        `   <tr> 
                                <td>${DataHelper.dataParaTexto(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>`
                        ).join('')}
                    
                    <tr>    
                        <td colspan='3'></td>
                        <td>${
                            // Reduz/"soma" os valores de um array , o valor 0.0 como segundo parametro é o valor inicial da "soma"
                            negociacoesModel.reduce((total, negociacao) => total += negociacao.volume, 0.0)
                        }</td>
                    </tr>    
                </tbody>
        
                <tfoot>
                </tfoot>
            </table>
        `
    }
}