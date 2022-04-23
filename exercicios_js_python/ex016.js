function descobrir() {
    var num = parseFloat(document.querySelector('.num').value)
    var result = document.querySelector('.result')
    result.innerHTML = `A parte inteira do número ${num} é ${Math.trunc(num)}`
}