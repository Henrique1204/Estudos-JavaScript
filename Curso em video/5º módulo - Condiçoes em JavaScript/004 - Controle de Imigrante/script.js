window.document.getElementById('botao').addEventListener('click', function(){
    
    let texto = document.querySelector('#text');
    let pais = texto.value;
    let res = document.getElementById('res');
    
    if(pais.toUpperCase() === "BRASIL" || pais.toUpperCase() === "BR"){
        res.innerHTML = '<p>Você é <strong>nativo!</strong></p>';
    }else{
        res.innerHTML = `<p>Você é <strong>estrangeiro</strong> do país de ${pais}</p>`;
    }
    
});