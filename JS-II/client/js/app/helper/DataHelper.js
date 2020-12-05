class DataHelper{

    constructor(){
        throw new Error('Classe não deve ser instanciada!');
    }
    static dataParaTexto(data){
        if(!/\d{4}-\d{2}-\d{2}/.test(data))
            alert('Data no formato invalido');

        return `${data.getDate()}/${data.getMonth() + 1 }/${data.getFullYear()}`;
    }

    static textoParaData(texto){
        return new Date(...texto.value
            .split('-')
            .map((item, indice) => item - indice % 2));
    }
}