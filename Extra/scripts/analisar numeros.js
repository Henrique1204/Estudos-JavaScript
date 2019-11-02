const novoItem = document.getElementById('novoItem');
const botaoAdicionarNumeroNaListaDeAnalise = document.querySelectorAll('#analisarNumeros button')[0];
const botaoAnalisarNumeros = document.querySelectorAll('#analisarNumeros button')[1];
let itensAnalisarNumeros = [];
let criarLista = false;
let apagarLista = false;

function adicionarNumerosNaListaDeAnalise(){
    let valorN = Number(novoItem.value);
    let lista = document.getElementById('listaDeNumeros');
    
    if(valorN >= 1 && valorN <= 100 && valorN !== ''){
        
        if(apagarLista){
            apagarLista = false;
            let sessaoAnaliseDeNumeros = document.querySelector('#analisarNumeros .caixaPadrao');
            let analise = document.getElementById('analise');
            sessaoAnaliseDeNumeros.removeChild(analise);
            itensAnalisarNumeros = [];
        };

        let i = 0;
        let testeDeIgualdade = false;
        
        while(i < itensAnalisarNumeros.length && testeDeIgualdade === false){
            
            if(valorN === itensAnalisarNumeros[i]){
                testeDeIgualdade = true;
            };
            i++
        };
        
        if(testeDeIgualdade === false){
            itensAnalisarNumeros.push(valorN);
            lista.innerHTML = '';
            for(i = 0; i < itensAnalisarNumeros.length; i++){
                let novaLinha = document.createElement('option');
                lista.appendChild(novaLinha);
                let linhas = document.querySelectorAll('#analisarNumeros option');
                linhas[i].text = `Valor ${itensAnalisarNumeros[i]} adicionado.`;
                linhas[i].setAttribute('value', `valor ${itensAnalisarNumeros[i]}`);
            };
            
        }else{
            alert('[ERRO] valor repetido!');
        };

        criarLista = true;

    }else{
        alert('[ERRO] o valor não está dentro do limite ou não foi informado');
    };
    novoItem.value = '';
};

function analisarNumeros(){
    if(criarLista){
        itensAnalisarNumeros.sort();
        let soma = 0;
        
        for(i = 0; i < itensAnalisarNumeros.length; i++){
            soma += itensAnalisarNumeros[i];
        };
        
        let media = soma / itensAnalisarNumeros.length;
        let sessaoAnaliseDeNumeros = document.querySelector('#analisarNumeros .caixaPadrao');
        let novaDiv = document.createElement('div');
        novaDiv.setAttribute('id', 'analise');
        sessaoAnaliseDeNumeros.appendChild(novaDiv);
        
        for(i = 0; i <= 5; i++){
            let novoP = document.createElement('p');
            novaDiv.appendChild(novoP);
            novoP.setAttribute('class','analises');
        };
        
        let analises = document.getElementsByClassName('analises');
        analises[0].innerHTML = `Ao todo foram <strong>${itensAnalisarNumeros.length}</strong> numeros adicionados`;
        analises[1].innerHTML = `O maior numero adicionado foi <strong>${itensAnalisarNumeros[itensAnalisarNumeros.length - 1]}</strong>`;
        analises[2].innerHTML = `O menor numero adicionado foi <strong>${itensAnalisarNumeros[0]}</strong>`;
        analises[3].innerHTML = `A soma entre todos eles é igual a <strong>${soma}</strong>`;
        analises[4].innerHTML = `A média entre os valores adicionados é <strong>${media.toFixed(1)}`;
        criarLista = false;
        apagarLista = true;
        
    }else{
        alert('[ERRO] dados inválidos!');
    }
};

botaoAdicionarNumeroNaListaDeAnalise.onclick = adicionarNumerosNaListaDeAnalise;
novoItem.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        adicionarNumerosNaListaDeAnalise();
    }
});
botaoAnalisarNumeros.onclick = analisarNumeros;