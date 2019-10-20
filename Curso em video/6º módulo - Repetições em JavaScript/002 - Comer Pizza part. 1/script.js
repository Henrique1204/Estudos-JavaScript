let pedaços = 0;
let possoProsseguir = false;

function pedir(){
    
    let numeroDePizzas = document.getElementById('numeroDePizzas');
    
    if(numeroDePizzas.value != '' && numeroDePizzas != 0){
        
        pedaços = numeroDePizzas.value * 8;
        
        if(!possoProsseguir){
            possoProsseguir = true;
        }
        
    }else{
        alert('[ERRO] defina uma quantidade antes de pedir');
    }
    
};

function comer(){
    
    let pedaçosComidos= document.getElementById('pedaçosComidos');
    let res = document.getElementsByClassName('res');
    
    if(possoProsseguir && pedaçosComidos.value != '' && pedaçosComidos.value >= 0 && pedaçosComidos.value <= pedaços){
        
        res[0].innerText = pedaçosComidos.value;
        res[1].innerText = pedaços - pedaçosComidos.value;
        
    }else{
        alert('[ERRO] corrija os dados e tente novamente');
    }
    
};