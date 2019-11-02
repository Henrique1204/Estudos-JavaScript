const tabuada = document.getElementById('tabuada');
const multiplicado = document.getElementById('multiplicado');
const botaoGerarTabuada = document.querySelector('#gerarTabuada button');
let criarTabuada = true;

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

botaoGerarTabuada.onclick = gerarTabuada;
multiplicado.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        gerarTabuada();
    };
});