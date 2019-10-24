function parImpa(n){
    if(n % 2 === 0){
        return 'par';
    }else{
        return 'impar';
    };
};

//parâmetro formal é o parâmetro que se usa enquanto está criando a função, parâmetro real é o parâmetro que se usa ao chamar a função
//parâmetro opcional serve para substituir a falta de um parâmetro na hora da chamada
//parâmetro opcional é quando tu atribúi um valor ao parâmetro dentro do parâmetro formal. Exemplo abaixo

function somar(n1=0, n2=0){
    return n1 + n2;
};

let dobro = function dobrar(n){
    return n * 2;
};

function fatorial(n){

    let fat = 1;

    for(i = n; i > 1; i--){
        fat *= i;
    };
    return fat;
};

let res = fatorial(5);
console.log(res);