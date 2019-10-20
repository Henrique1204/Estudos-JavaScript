let pedaços = 0;
let i = 0;
let possoProsseguir = false;

function pedir(){
    
    let numeroDePizzas = document.getElementById('numeroDePizzas');
    let res = document.getElementsByClassName('res');
    
    if(numeroDePizzas.value != '' && numeroDePizzas != 0){
        
        pedaços = numeroDePizzas.value * 8;
        res[0].innerText = pedaços;
        res[1].innerText = 0;
        i = 0;
        
        if(!possoProsseguir){
            possoProsseguir = true;
        }
        
    }else{
        alert('[ERRO] defina uma quantidade antes de pedir');
    }
    
};

function comer(){
    
    let res = document.getElementsByClassName('res');
    
    if(possoProsseguir && i <= pedaços){
        
        res[0].innerText = pedaços - i;
        res[1].innerText = i;
        i++;

    }else{
        alert('[ERRO] corrija os dados e tente novamente');
    }
};

function comerTudo(){

    let res = document.getElementsByClassName('res');
    
    if(possoProsseguir && i <= pedaços){
        
        res[0].innerText = 0;
        for(i = 0; i <= pedaços; i++){
            res[1].innerText = i;
        };

    }else{
        alert('[ERRO] corrija os dados e tente novamente');
    }

}


