//validar paciente
function validarPaciente(paciente){
    var listaErro = [];
    
    if(paciente.altura <= 0 || paciente.altura >= 3.00){
        listaErro.push('Altura invalida!')
    }
    if(paciente.peso <= 0 || paciente.peso >= 500){
        listaErro.push('Peso invalido!')
    }

    return listaErro;
}
