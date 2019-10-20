function contar(){

    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementsByTagName('p');



    if(inicio.value != '' && fim.value != '' && passo.value != ''){

        res[0].innerText = 'Contando:';

        if(passo.value > 0){

            if(inicio.value < fim.value){

                for(i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
                    res[0].innerText += ` ${i} \u{1f449} `;
                }; 
                res[0].innerText += `\u{1F3F4}`;

            }else{
                for(i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)){
                    res[0].innerText += ` ${i} \u{1f449} `;
                }; 
                res[0].innerText += `\u{1F3F4}`;
            };

        }else{

            if(inicio.value < fim.value){
                alert('[ERRO] passo não definido. o passo será considerado igual a 1')
                for(i = inicio.value; i <= fim.value; i++){
                    res[0].innerText += ` ${i} \u{1F449} `
                };
                res[0].innerText += `\u{1F3F4}`;
                
            }else{
                alert('[ERRO] passo não definido. o passo será considerado igual a 1')
                for(i = inicio.value; i >= fim.value; i--){
                    res[0].innerText += ` ${i} \u{1F449} `
                };
                res[0].innerText += `\u{1F3F4}`; 
            };
        };

    }else{
        res[0].innerText = 'Impossível contar.'
    };

};