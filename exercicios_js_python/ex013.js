function converter() {
    var salario = parseFloat(document.querySelector('.sal').value)
    var aumento = parseInt(document.querySelector('.aumento').value)
    var result = document.querySelector('.result')
    var salAu = parseFloat((salario / 100 * aumento).toFixed(2))
    result.innerHTML = `Salário atual: R$ ${salario.toFixed(2)} <br>Salário com aumento de ${aumento}%: R$ ${(salario + salAu).toFixed(2)} <br>Você passará a ganhar R$ ${salAu.toFixed(2)} a mais.`
}