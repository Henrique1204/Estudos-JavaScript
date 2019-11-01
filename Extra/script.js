const nomeDeBoasVindas = document.getElementById('nomeDeBoasVindas');
const botaoBoasVindas = document.querySelector('#boasVindas button');
const calculadoraNumero = document.querySelectorAll('#calculadora .numero');
const calculadoraOperadores = document.querySelectorAll('.operadores');
const sinalDaOperacao = document.getElementById('sinalDaOperacao');
const resultadoCalculadora = document.getElementById('resultadoCalculadora');

function darBoasVindas(){
    
    let nomeDeBoasVindasValor = nomeDeBoasVindas.value;

    if(nomeDeBoasVindasValor !== '' && nomeDeBoasVindasValor){

        let agora = new Date();
        let hora = agora.getHours();
        let comprimento;

        if(hora > 5 && hora < 13){
            comprimento = 'Bom dia';
        }else if(hora < 18){
            comprimento = 'Boa tarde';
        }else if(hora < 1){
            comprimento = 'Boa noite';
        }else{
            comprimento = 'Boa madrugada';
        }

        alert(`${comprimento} ${nomeDeBoasVindasValor}, seja Bem-vindo(a) ao meu site e fique avontade`);
        alert(`Seu nome tem ${nomeDeBoasVindasValor.length} letras`);
        alert(`Convertendo para maiúsculo fica ${nomeDeBoasVindasValor.toUpperCase()}`);
        alert(`Convertendo para minúsculo fica ${nomeDeBoasVindasValor.toLocaleLowerCase()}`);
        nomeDeBoasVindas.value = '';
        nomeDeBoasVindas.focus();
        nomeDeBoasVindas.removeAttribute('class', 'semOutline');
        nomeDeBoasVindas.style.borderColor = 'initial';
    }else{
        nomeDeBoasVindas.style.borderColor = 'red';
        nomeDeBoasVindas.setAttribute('class', 'semOutline');
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