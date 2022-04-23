function somar(){
    var n1 = parseInt(document.querySelector('.num1').value)
    var n2 = parseInt(document.querySelector('.num2').value)
    var resultado = document.querySelector('.result')
    resultado.innerHTML = `O resultado da soma entre ${n1} e ${n2} é: ${n1+n2}`
}