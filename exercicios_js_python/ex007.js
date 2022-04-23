function media() {
    var n1 = parseFloat(document.querySelector('.num1').value)
    var n2 = parseFloat(document.querySelector('.num2').value)
    var result = document.querySelector('.result')
    result.innerHTML = `A média entre ${n1} e ${n2} é ${(n1 + n2) / 2}.`
}