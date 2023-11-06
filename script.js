const input1 = document.getElementById('calculo');
const btn = document.getElementById('btnCalcular');
const p = document.getElementById('Result');


btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    let CreditosEspaciales;
    let ValorDolares = parseFloat(input1.value);
    CreditosEspaciales = ValorDolares * 10;
    p.innerHTML = `${ValorDolares} dolares equivalen a ${CreditosEspaciales} Creditos Espaciales`;
}