function somar() {

    let tn1 = window.document.getElementById("text1");
    let tn2 = window.document.querySelector("#text2");
    let res = window.document.getElementById("res");
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let soma = n1 + n2;
    res.innerText = `A soma entre ${n1} e ${n2} é: ${soma}`;

}