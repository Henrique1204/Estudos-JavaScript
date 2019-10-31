let nomeDeBoasVindas = document.getElementById('nomeDeBoasVindas');
let botaoBoasVindas = document.querySelector('#boasVindas button');


function darBoasVindas(){

    let nomeDeBoasVindasValor = nomeDeBoasVindas.value;

    if(nomeDeBoasVindasValor !== '' && nomeDeBoasVindasValor){
        alert(`Olá ${nomeDeBoasVindasValor}, seja Bem-vindo ao meu site e fique avontade`);
        nomeDeBoasVindas.value = '';
        nomeDeBoasVindas.focus();
    };
};

botaoBoasVindas.onclick = darBoasVindas;
nomeDeBoasVindas.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        darBoasVindas();  
    };
});