function descobrir() {
    var num = parseInt(document.querySelector('.num').value)
    var result = document.querySelector('.result')
    result.innerHTML = `O número digitado foi ${num}, seu antecessor é ${num - 1} e seu sucessor é ${num + 1}.`
}