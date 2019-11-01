const nomeDeBoasVindas = document.getElementById('nomeDeBoasVindas');
const botaoBoasVindas = document.querySelector('#boasVindas button');
const calculadoraNumero = document.querySelectorAll('#calculadora .numero');
const calculadoraOperadores = document.querySelectorAll('.operadores');
const sinalDaOperacao = document.getElementById('sinalDaOperacao');
const resultadoCalculadora = document.getElementById('resultadoCalculadora');
const periodoDoDia = document.getElementById('periodoDoDia');
const mensagemDoPeriodoDoDia = document.querySelector('#periodoDoDia p');
const imagemDoPeriodoDoDia = document.querySelector('#periodoDoDia img');
const fAno = document.getElementById('txtano');
const botaoVerificarIdade = document.getElementById('botaoVerificarIdade');
const resultadoVerificarIdade = document.getElementById('mostrarIdade');
const botaoContarPasso = document.querySelector('#contarPasso button');
const inicio = document.getElementById('inicio');
const fim = document.getElementById('fim');
const passo = document.getElementById('passo');
const resultadoContaPasso = document.querySelector('#contarPasso p');
const tabuada = document.getElementById('tabuada');
const multiplicado = document.getElementById('multiplicado');
const botaoGerarTabuada = document.querySelector('#gerarTabuada button');
let comprimento;
let criarTabuada = true;

function verificarPeriodoDoDia(){
    let agora = new Date();
    let hora = agora.getHours();

    if(hora > 5 && hora < 13){
        return comprimento = 'Bom dia';
    }else if(hora < 18){
        return comprimento = 'Boa tarde';
    }else if(hora < 24){
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

function verificarIdade(){
    
    let data = new Date();
    let ano = data.getFullYear();
    
    if(fAno.value === '0' || fAno.value > ano || fAno.value === ''){
        
        alert('[ERRO] Verifique os dados e digite novamente!');
        
    }else{
        
        let fSex = document.getElementsByName('radsex');
        let idade = ano - fAno.value;
        let genero = '';
        let img = document.createElement('img');
        img.style.borderRadius = '50%';
        
        if(fSex[0].checked){
            
            genero = 'masculino';
            
            if(idade < 12){
                img.setAttribute('src', 'img//Verificar idade/novo.jpg');
            }else if(idade < 18){
                img.setAttribute('src', 'img//Verificar idade/menino.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'img//Verificar idade/homem adulto.jpg');
            }else{
                img.setAttribute('src', 'img//Verificar idade/velho.jpg');
            };
            
        }else if(fSex[1].checked){
            
            genero = 'feminino';
            
            if(idade < 12){
                img.setAttribute('src', 'img/Verificar idade/nova.jpg');
            }else if(idade < 18){
                img.setAttribute('src', 'img//Verificar idade/menina.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'img//Verificar idade/mulher adulta.jpg');
            }else{
                img.setAttribute('src', 'img//Verificar idade/velha.jpg');
            };
            
        }else{
            
            genero = 'não definino';
            
            img.setAttribute('src', 'img/Verificar idade/não definino.jpg');
        };
        
        resultadoVerificarIdade.innerHTML = `<p>Você é uma pessoa do gênero <strong>${genero}</strong> e idade de <strong>${idade} anos</strong></p>`;
        resultadoVerificarIdade.appendChild(img);
        for(i = 0; i < fSex.length; i++){
            fSex[i].checked = false;
        };
    };
    
};

function gerarTabuada(){

    let numeroMultiplicado = Number(multiplicado.value);
    
    if(numeroMultiplicado != ''){
        
        for(i = 0; i <= 10; i++){
            let resultadoDaMultiplicacao = numeroMultiplicado * i;
            if(criarTabuada){
                let novaLinha = document.createElement('option');
                tabuada.appendChild(novaLinha);
                let linhas = document.getElementsByTagName('option');
                linhas[i].setAttribute('value', `multiplicador${i}`);
            };
            let linhas = document.getElementsByTagName('option');
            linhas[i].text = `${numeroMultiplicado} X ${i} = ${resultadoDaMultiplicacao}`;
        };
        criarTabuada = false;
        multiplicado.value = '';
        multiplicado.focus();
        
    }else{
        alert('[ERRO] defina um numero a ser multiplicado');
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

botaoVerificarIdade.onclick = verificarIdade;
fAno.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        verificarIdade();
    };
});

botaoContarPasso.addEventListener('click', function contar(){


    if(inicio.value != '' && fim.value != '' && passo.value != ''){

        resultadoContaPasso.innerText = 'Contando:';

        if(passo.value > 0){

            if(inicio.value < fim.value){

                for(i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
                    resultadoContaPasso.innerText += ` ${i} \u{1f449} `;
                }; 
                resultadoContaPasso.innerText += `\u{1F3F4}`;

            }else{
                for(i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)){
                    resultadoContaPasso.innerText += ` ${i} \u{1f449} `;
                }; 
                resultadoContaPasso.innerText += `\u{1F3F4}`;
            };

        }else{

            if(inicio.value < fim.value){
                alert('[ERRO] passo não é válido. o passo será considerado igual a 1')
                for(i = inicio.value; i <= fim.value; i++){
                    resultadoContaPasso.innerText += ` ${i} \u{1F449} `
                };
                resultadoContaPasso.innerText += `\u{1F3F4}`;
                
            }else{
                alert('[ERRO] passo não é válido. o passo será considerado igual a 1')
                for(i = inicio.value; i >= fim.value; i--){
                    resultadoContaPasso.innerText += ` ${i} \u{1F449} `
                };
                resultadoContaPasso.innerText += `\u{1F3F4}`; 
            };
        };

    }else{
        resultadoContaPasso.innerText = 'Impossível contar, preencha todos os campos'
    };

});

botaoGerarTabuada.onclick = gerarTabuada;
multiplicado,addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        gerarTabuada();
    };
});