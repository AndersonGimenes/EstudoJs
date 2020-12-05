// Joga a funcionalidade das funções em variavel referenciado sempre ao objeto DOM
var $ = document.querySelector.bind(document);
var criarElemnto = document.createElement.bind(document);

// calcular IMC
function calcularIMC(altura, peso){
    var resultado = peso / (altura * altura);
    return resultado.toFixed(2); // fixa duas casas decimas após o ponto
}

// deletar elemento da tabela
function deletarElemento(elemento){
    elemento.addEventListener('dblclick', function(event){
        var alvo = event.target.parentNode;
        alvo.setAttribute('class', 'fadeOut');
        setTimeout(function(){
            alvo.remove();
        }, 500);
    });
}

