// buscar elementos no DOM
var corpoTabela = $("#tabela-pacientes");
var filtro = $("#filtro");

// buscar pacientes tabela
buscarPacientes(filtro);

// deletar elemento
deletarElemento(corpoTabela);

// Adicionar tr paciente na tabela
function adicionarTr(paciente){
    corpoTabela.appendChild(montarTrPaciente(paciente));
}

