const nomeDeBoasVindas = document.getElementById('nomeDeBoasVindas');
const botaoBoasVindas = document.querySelector('#boasVindas button');
const calculadoraNumero = document.querySelectorAll('#calculadora .numero');
const calculadoraOperadores = document.querySelectorAll('.operadores');
const sinalDaOperacao = document.getElementById('sinalDaOperacao');
const resultadoCalculadora = document.getElementById('resultadoCalculadora');

function darBoasVindas(){
    
    let nomeDeBoasVindasValor = nomeDeBoasVindas.value;
    
    if(nomeDeBoasVindasValor !== '' && nomeDeBoasVindasValor){
        alert(`Olá ${nomeDeBoasVindasValor}, seja Bem-vindo(a) ao meu site e fique avontade`);
        nomeDeBoasVindas.value = '';
        nomeDeBoasVindas.focus();
    };
};

function mostrarSinal(){
    sinalDaOperacao.innerText = this.value;
    
};

function calcular(){
    let n1 = Number(calculadoraNumero[0].value);
    let n2 = Number(calculadoraNumero[1].value);
    
    switch(this.value){
        
        case '+':
        resultadoCalculadora.innerText = n1 + n2;
        break;
        case '-':
        resultadoCalculadora.innerText = n1 - n2;
        break;
        case 'X':
        resultadoCalculadora.innerText = n1 * n2;
        break;
        case '/':
        resultadoCalculadora.innerText = n1 / n2;
        break;
        default:
        break;
    };
};

botaoBoasVindas.onclick = darBoasVindas;
nomeDeBoasVindas.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        darBoasVindas();  
    };
});

for(operadores of calculadoraOperadores){
    operadores.onmouseenter = mostrarSinal;
    operadores.onclick = calcular;
};