var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tBody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', (event) => {
    
    event.preventDefault();
    
    var tr = document.createElement('tr');

    campos.forEach((campo) => {
        var tdCampo = document.createElement('td');
        tdCampo.textContent = campo.value;
        tr.appendChild(tdCampo);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tBody.appendChild(tr);
});