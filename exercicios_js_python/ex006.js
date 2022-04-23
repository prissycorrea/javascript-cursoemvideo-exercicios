function descobrir() {
    var num = parseInt(document.querySelector('.num').value)
    var result = document.querySelector('.result')
    result.innerHTML = `O número digitado foi ${num}, o dobro vale ${num * 2}, o triplo vale ${num * 3} e a raiz quadrada vale ${(Math.sqrt(num)).toFixed(2)}.`
}