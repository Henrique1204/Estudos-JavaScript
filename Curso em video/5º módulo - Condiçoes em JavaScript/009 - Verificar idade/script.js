function verificar(){
    
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = window.document.getElementById('txtano');
    let res = window.document.querySelector('#res');
    
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
                img.setAttribute('src', 'img/novo.jpg');
            }else if(idade < 18){
                img.setAttribute('src', 'img/menino.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'img/homem adulto.jpg');
            }else{
                img.setAttribute('src', 'img/velho.jpg');
            };
            
        }else if(fSex[1].checked){
            
            genero = 'feminino';
            
            if(idade < 12){
                img.setAttribute('src', 'img/nova.jpg');
            }else if(idade < 18){
                img.setAttribute('src', 'img/menina.jpg');
            }else if(idade < 50){
                img.setAttribute('src', 'img/mulher adulta.jpg');
            }else{
                img.setAttribute('src', 'img/velha.jpg');
            };
            
        }else{
            
            genero = 'não definino';
            
            img.setAttribute('src', 'img/não definino.jpg');
        };
        
        res.innerHTML = `<p>Você é uma pessoa do gênero <strong>${genero}</strong> e idade de <strong>${idade} anos</strong></p>`;
        res.appendChild(img);
        for(i = 0; i < fSex.length; i++){
            fSex[i].checked = false;
        };
    };
    
};