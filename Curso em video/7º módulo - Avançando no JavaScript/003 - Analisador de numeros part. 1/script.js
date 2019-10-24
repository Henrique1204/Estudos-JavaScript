let itens = [];
let criar = false;
let apagar = false;


function adicionar(){
    let novoItem = document.getElementById('novoItem');
    let valorN = Number(novoItem.value);
    let lista = document.getElementById('listaDeNumeros');
    
    if(valorN >= 1 && valorN <= 100 && valorN !== ''){
        
        if(apagar){
            apagar = false;
            let sessão = document.getElementsByTagName('section');
            let analise = document.getElementById('analise');
            sessão[0].removeChild(analise);
            itens = [];
        };

        let i = 0;
        let testeDeIgualdade = false;
        
        while(i < itens.length && testeDeIgualdade === false){
            
            if(valorN === itens[i]){
                testeDeIgualdade = true;
            };
            i++
        };
        
        if(testeDeIgualdade === false){
            itens.push(valorN);
            lista.innerHTML = '';
            for(i = 0; i < itens.length; i++){
                let novaLinha = document.createElement('option');
                lista.appendChild(novaLinha);
                let linhas = document.getElementsByTagName('option');
                linhas[i].text = `Valor ${itens[i]} adicionado.`;
                linhas[i].setAttribute('value', `valor ${itens[i]}`);
            };
            
        }else{
            alert('[ERRO] valor repetido!');
        };

        criar = true;

    }else{
        alert('[ERRO] o valor não está dentro do limite ou não foi informado');
    };
    novoItem.value = '';
};

function analisar(){
    if(criar){
        itens.sort();
        let soma = 0;
        
        for(i = 0; i < itens.length; i++){
            soma += itens[i];
        };
        
        let media = soma / itens.length;
        let sessão = document.getElementsByTagName('section');
        let novaDiv = document.createElement('div');
        novaDiv.setAttribute('id', 'analise');
        sessão[0].appendChild(novaDiv);
        
        for(i = 0; i <= 5; i++){
            let novoP = document.createElement('p');
            novaDiv.appendChild(novoP);
            novoP.setAttribute('class','analises');
        };
        
        let analises = document.getElementsByClassName('analises');
        analises[0].innerHTML = `Ao todo foram <strong>${itens.length}</strong> numeros adicionados`;
        analises[1].innerHTML = `O maior numero adicionado foi <strong>${itens[itens.length - 1]}</strong>`;
        analises[2].innerHTML = `O menor numero adicionado foi <strong>${itens[0]}</strong>`;
        analises[3].innerHTML = `A soma entre todos eles é igual a <strong>${soma}</strong>`;
        analises[4].innerHTML = `A média entre os valores adicionados é <strong>${media.toFixed(1)}`;
        criar = false;
        apagar = true;
        
    }else{
        alert('[ERRO] dados inválidos!');
    }
}