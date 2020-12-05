// Importa JSON(AJAX)
function importaJSON(elemento, url){
    elemento.addEventListener("click", function(){
        var xhr = new XMLHttpRequest(); 
        xhr.open("GET", url);
        
        xhr.addEventListener("load", function(){
            var listaJson = JSON.parse(xhr.responseText);
                  
            listaJson.forEach(function (json){
                adicionarTr(json);
            });
        });

        xhr.send();
    });
}
