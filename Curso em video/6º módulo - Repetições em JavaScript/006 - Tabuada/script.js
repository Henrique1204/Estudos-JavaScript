let criar = true;

function multiplicar(){
    
    let multiplicado = document.getElementById('multiplicado');
    let numeroMultiplicado = Number(multiplicado.value);
    let tabuada = document.getElementById('tabuada');
    
    if(numeroMultiplicado != ''){
        
        for(i = 0; i <= 10; i++){
            let res = numeroMultiplicado * i;
            if(criar){
                let novaLinha = document.createElement('option');
                tabuada.appendChild(novaLinha);
                let linhas = document.getElementsByTagName('option');
                linhas[i].setAttribute('value', `multiplicador${i}`);
            };
            let linhas = document.getElementsByTagName('option');
            linhas[i].text = `${numeroMultiplicado} X ${i} = ${res}`;
        };
        criar = false;
        
    }else{
        alert('[ERRO] defina um numero a ser multiplicado');
    };
};
