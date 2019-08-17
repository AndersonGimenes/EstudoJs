// obter elemento botão que importa paciente
var botaoImporta = $("#importa-paciente");

// importa e adiciona json na tabela
importaJSON(botaoImporta,"http://api-pacientes.herokuapp.com/pacientes");