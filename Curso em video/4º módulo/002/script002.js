let area = window.document.getElementById('area');

/*forma alternativa
area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);
*/

function clicar() {

    area.innerText = 'Clicou!';
    area.style.backgroundColor = 'red';

};

function entrar() {

    area.innerText = 'entrou'
    area.style.backgroundColor = 'blue';

};

function sair() {

    area.innerText = 'saiu';
    area.style.backgroundColor = 'rgb(64, 211, 64)';

};