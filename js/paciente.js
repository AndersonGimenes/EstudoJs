// montar tr paciente
function montarTrPaciente(paciente){
    // criar elementos(tag) html para o objeto  
    var pacienteTr = criarElemnto("tr");
    var nomeTd = criarElemnto("td");
    var pesoTd = criarElemnto("td");
    var alturaTd = criarElemnto("td");
    var gorduraTd = criarElemnto("td");
    var imcTd = criarElemnto("td");

    // adiciona classes e ids no elemento
    pacienteTr.setAttribute("class", "paciente");
    nomeTd.setAttribute("class", "info-nome");
    pesoTd.setAttribute("class", "info-peso");
    alturaTd.setAttribute("class", "info-altura");
    gorduraTd.setAttribute("class", "info-gordura");
    imcTd.setAttribute("class", "info-imc");

    // populo os elementos
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calcularIMC(paciente.altura,paciente.peso);

    // adiciona filhos da tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

// Busca pacientes da tabela
function buscarPacientes(elemento){
    elemento.addEventListener("input", function(){
        var listaPacientes = document.querySelectorAll(".paciente");
        var inputNome = this.value;
        
        if(inputNome.length > 1){
            listaPacientes.forEach(function(paciente){
                var nome = paciente.querySelector('.info-nome').textContent;
                var regex = new RegExp(inputNome,"i");
               
               // condição ternaria
               !regex.test(nome)? paciente.classList.add("invisivel") : paciente.classList.remove("invisivel");
                
            });
        }else{
            listaPacientes.forEach(function(paciente){
                paciente.classList.remove("invisivel");
            });
        }
    });
}

//adicionar paciente tabela
function adicionarPacienteTabela(elementoBotao){
    elementoBotao.addEventListener('click', function(event){

        event.preventDefault();

        var form = $('#form-adiciona');
        var paciente = criarObjetoPaciente(form);
        var ulListaErro = $('#validacaoForm');
        ulListaErro.innerHTML = ""; 
        
        // verifica se existe erros no form de valores
        var listaErro = validarPaciente(paciente);
        if(listaErro.length > 0){
            listaErro.forEach(function(msgErro){
                var li = criarElemnto("li");
                li.setAttribute('class', 'validarCampoForm');
                li.textContent = msgErro;
                ulListaErro.appendChild(li);
            })

            listaErro = 0; 
            return;
        }

        // injeta na tabela o objeto criado 
        adicionarTr(paciente);
        limparCamposForm(form);
    });
}

// criar paciente
function criarObjetoPaciente(form){
    // objeto paciente
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.altura.value,form.peso.value)
    };
}

// limpar campos e dar foco no campo nome
function limparCamposForm(form){
    form.nome.value = '';
    form.peso.value = '';
    form.altura.value = '';
    form.gordura.value = '';
    form.nome.focus();
}