function carregar(){
    
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imgRedonda');
    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `<p>Agora são <strong>${hora} horas</strong></p>`

    if(hora >= 6 && hora < 12){
        img.style.backgroundImage = 'url("img/manhã.jpg")';
        document.body.style.backgroundColor = '#e2cd9f';
    }else if(hora >= 13 &&  hora < 18){
        img.style.backgroundImage = 'url("img/tarde.jpg")';
        document.body.style.backgroundColor = '#b9846f';
    }else{
        img.style.backgroundImage = 'url("img/noite.jpg")';
        document.body.style.backgroundColor = '#515154';
    };
    
}