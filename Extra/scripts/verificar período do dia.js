const periodoDoDia = document.getElementById('periodoDoDia');
const mensagemDoPeriodoDoDia = document.querySelector('#periodoDoDia p');
const imagemDoPeriodoDoDia = document.querySelector('#periodoDoDia img');
let comprimento;

window.onload = setInterval(function(){

    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();

    if(hora > 5 && hora < 13){
        comprimento = 'Bom dia';
    }else if(hora < 18){
        comprimento = 'Boa tarde';
    }else if(hora < 24){
        comprimento = 'Boa noite';
    }else{
        comprimento = 'Boa madrugada';
    };

    mensagemDoPeriodoDoDia.innerHTML = `${comprimento}, agora são <strong>${hora}</strong> horas e <strong>${minutos}</strong> minutos`;

    if(comprimento === 'Bom dia'){
        imagemDoPeriodoDoDia.src = 'img/período do dia/manhã.jpg';
        periodoDoDia.style.backgroundColor = '#F5D8BA';
    }else if(comprimento === 'Bom tarde'){
        imagemDoPeriodoDoDia.src = 'img/período do dia/tarde.jpg';
        periodoDoDia.style.backgroundColor = '#FDA403';
    }else{
        imagemDoPeriodoDoDia.src = 'img/período do dia/noite.jpg';
        periodoDoDia.style.backgroundColor = '#515154'
    };
}, 1000);