const nomeDeBoasVindas = document.getElementById('nomeDeBoasVindas');
const botaoBoasVindas = document.querySelector('#boasVindas button');
const calculadoraNumero = document.querySelectorAll('#calculadora .numero');
const calculadoraOperadores = document.querySelectorAll('.operadores');
const sinalDaOperacao = document.getElementById('sinalDaOperacao');
const resultadoCalculadora = document.getElementById('resultadoCalculadora');
const periodoDoDia = document.getElementById('periodoDoDia');
const mensagemDoPeriodoDoDia = document.querySelector('#periodoDoDia p');
const imagemDoPeriodoDoDia = document.querySelector('#periodoDoDia img');
let comprimento;

function verificarPeriodoDoDia(){
    let agora = new Date();
    let hora = agora.getHours();

    if(hora > 5 && hora < 13){
        return comprimento = 'Bom dia';
    }else if(hora < 18){
        return comprimento = 'Boa tarde';
    }else if(hora < 1){
        return comprimento = 'Boa noite';
    }else{
        return comprimento = 'Boa madrugada';
    };
};

function darBoasVindas(){

    let nomeDeBoasVindasValor = nomeDeBoasVindas.value;

    if(nomeDeBoasVindasValor !== '' && nomeDeBoasVindasValor){

        verificarPeriodoDoDia();
        let analisar = confirm(`${comprimento} ${nomeDeBoasVindasValor}, seja Bem-vindo(a) ao meu site e fique avontade. Quer analisar seu nome?`);
        if(analisar){
            alert(`Seu nome tem ${nomeDeBoasVindasValor.length} letras`);
            alert(`Convertendo para maiúsculo fica ${nomeDeBoasVindasValor.toUpperCase()}`);
            alert(`Convertendo para minúsculo fica ${nomeDeBoasVindasValor.toLocaleLowerCase()}`);
        };
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


window.onload = verificarPeriodoDoDia;

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


window.onload = setInterval(function(){

    verificarPeriodoDoDia();
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();

    mensagemDoPeriodoDoDia.innerHTML = `${comprimento}, agora são <strong>${hora}</strong> horas e <strong>${minutos}</strong> minutos`;

    if(comprimento === 'Bom dia'){
        imagemDoPeriodoDoDia.src = 'img/período do dia/manhã.jpg';
        periodoDoDia.style.backgroundColor = '#F5D8BA';
    }else if(comprimento === 'Bom tarde'){
        imagemDoPeriodoDoDia.src = 'img/período do dia/tarde.jpg';
        periodoDoDia.style.backgroundColor = '#FDA403';
    }else{
        imagemDoPeriodoDoDia.src = 'img/período do dia/noite.jpg';
        periodoDoDia.style.backgroundColor = '#515154'
    };
}, 1000);