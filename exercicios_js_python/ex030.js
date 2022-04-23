function descobrir() {
    var num = document.querySelector('.num').value 
    var result = document.querySelector('.result')

    if(num % 2 == 0) {
        result.innerHTML = `O número ${num} é par.`
    } else {
        result.innerHTML = `O número ${num} é ímpar.`
    }
}