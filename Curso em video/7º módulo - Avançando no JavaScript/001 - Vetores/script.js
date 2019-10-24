let num = [5,9,2,8,3];

/*
num.sort(); organiza em ordem crescente
num.push(1);

    for(i = 0; i < num.length; i++){
        console.log(`a posição ${i} tem valor de ${num[i]}`);
    };

console.log(num);
console.log(`o meu vetor tem ${num.length} posições`);
console.log(`0 primeiro valor do vetor é ${num[0]}`);
*/

for(i in num){
    console.log(`na posição ${i} o valor é ${num[i]}`);
};

console.log(`o meu valor 5 está na posição ${num.indexOf(5)}`);