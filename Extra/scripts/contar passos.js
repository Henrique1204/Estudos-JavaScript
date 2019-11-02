const botaoContarPasso = document.querySelector('#contarPasso button');
const inicio = document.getElementById('inicio');
const fim = document.getElementById('fim');
const passo = document.getElementById('passo');
const resultadoContaPasso = document.querySelector('#contarPasso p');

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