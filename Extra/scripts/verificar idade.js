const fAno = document.getElementById('txtano');
const botaoVerificarIdade = document.getElementById('botaoVerificarIdade');
const resultadoVerificarIdade = document.getElementById('mostrarIdade');

function verificarIdade(){
    
    let data = new Date();
    let ano = data.getFullYear();
    
    if(fAno.value === '0' || fAno.value > ano || fAno.value === ''){
        
        alert('[ERRO] Verifique os dados e digite novamente!');
        
    }else{
        
        let fSex = document.getElementsByName('radsex');
        let idade = ano - fAno.value;
        let genero = '';
        let img = document.createElement('img');
        img.style.borderRadius = '50%';
        
        if(fSex[0].checked){
            
            genero = 'masculino';
            
            if(idade < 12){
                img.setAttribute('src', 'img//Verificar idade/novo.jpg');
            }else if(idade < 18){
                img.setAttribute('src', 'img//Verificar idade/menino.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'img//Verificar idade/homem adulto.jpg');
            }else{
                img.setAttribute('src', 'img//Verificar idade/velho.jpg');
            };
            
        }else if(fSex[1].checked){
            
            genero = 'feminino';
            
            if(idade < 12){
                img.setAttribute('src', 'img/Verificar idade/nova.jpg');
            }else if(idade < 18){
                img.setAttribute('src', 'img//Verificar idade/menina.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'img//Verificar idade/mulher adulta.jpg');
            }else{
                img.setAttribute('src', 'img//Verificar idade/velha.jpg');
            };
            
        }else{
            
            genero = 'não definino';
            
            img.setAttribute('src', 'img/Verificar idade/não definino.jpg');
        };
        
        resultadoVerificarIdade.innerHTML = `<p>Você é uma pessoa do gênero <strong>${genero}</strong> e idade de <strong>${idade} anos</strong></p>`;
        resultadoVerificarIdade.appendChild(img);
        for(i = 0; i < fSex.length; i++){
            fSex[i].checked = false;
        };
    };
    
};

botaoVerificarIdade.onclick = verificarIdade;
fAno.addEventListener('keyup', function(evento){
    if(evento.keyCode === 13){
        verificarIdade();
    };
});