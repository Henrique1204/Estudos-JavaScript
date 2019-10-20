let pizza = ['primeira fatia', 'segunda fatia', 'terceira fatia', 'quarta fatia', 'quinta fatia', 'sexta fatia', 'sétima fatia', 'oitava fatia'];
let passos = 500;

function comerPizza(){

    let i = 0;

    while(i < pizza.length){
        console.log(`Você comeu a ${pizza[i]}`);
        i ++;
    };

};

function contaPasso(){

    let i = 1;

    while(i <= passos){
        console.log(`Passo ${i}`);
        i++;
    };


};

function contaPasso2(){

    let i = 1;

    do{
        console.log(`Passo ${i}`);
        i++
    }while(i <= passos);

}