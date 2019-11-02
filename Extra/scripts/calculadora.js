const calculadoraNumero = document.querySelectorAll('#calculadora .numero');
const calculadoraOperadores = document.querySelectorAll('.operadores');
const sinalDaOperacao = document.getElementById('sinalDaOperacao');
const resultadoCalculadora = document.getElementById('resultadoCalculadora');

function mostrarSinal(){
    if(this.value != 'limpar'){
        sinalDaOperacao.innerText = this.value;
    };
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
        if(n1 === 0 || n2 === 0){
            resultadoCalculadora.innerText = 0;
        }else{
            resultadoCalculadora.innerText = (n1 / n2).toFixed(1);
        };
        break;
        case 'limpar':
        if(resultadoCalculadora.innerText != ''){
            calculadoraNumero[0].value = 0;
            calculadoraNumero[1].value = 0;
            resultadoCalculadora.innerText = '';
            calculadoraNumero[0].focus();
        };
        break;
        default:
        break;
    };
};

for(operadores of calculadoraOperadores){
    operadores.onmouseenter = mostrarSinal;
    operadores.onclick = calcular;
};