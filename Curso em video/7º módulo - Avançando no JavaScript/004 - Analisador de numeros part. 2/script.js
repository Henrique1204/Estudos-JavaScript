let num = document.querySelector('#novoItem');
let lista = document.querySelector('#listaDeNumeros');
let resposta = document.querySelector('#res');
let valores = [];

function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100 && n != ''){
        return true;
    }else{
        return false;
    };

};

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    };

};

function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        resposta.innerHTML = '';
    }else{
        alert('[ERRO] valor inválido ou já encontrado na lista.');
    };
    num.value = '';
    num.focus();

};

function finalizar(){
    if(valores.length === 0){
        alert('Adicione valores');
    }else{
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;

        //Selection sort
        for(i in valores){
            soma += valores[i];
            if(valores[i] > maior){
                maior = valores[i];
            }
            if(valores[i] < menor){
                menor = valores[i];
            }
        };

        let media = soma/total;

        resposta.innerHTML = '';
        resposta.innerHTML += `<p>Total de ${total} numeros adicionados</p>`;
        resposta.innerHTML += `<p>O maior numero adicionado foi ${maior}</p>`;
        resposta.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`;
        resposta.innerHTML += `<p>A soma entre todos os valores é ${soma}</p>`;
        resposta.innerHTML += `<p>A média entre todos os valores é ${media}</p>`;
    }
};