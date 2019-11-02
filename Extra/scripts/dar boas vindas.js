//variavel comprimento está no arquivo 'verificar período do dia.js'
const nomeDeBoasVindas = document.getElementById('nomeDeBoasVindas');
const botaoBoasVindas = document.querySelector('#boasVindas button');

function darBoasVindas(){

    let nomeDeBoasVindasValor = nomeDeBoasVindas.value;

    if(nomeDeBoasVindasValor !== '' && nomeDeBoasVindasValor){

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
        alert('Preencha o campo');
    };
};

botaoBoasVindas.onclick = darBoasVindas;
nomeDeBoasVindas.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        darBoasVindas();  
    };
});