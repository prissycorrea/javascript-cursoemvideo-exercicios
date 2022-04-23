function descobrir() {
    var num = document.querySelector('.num').value 
    var result = document.querySelector('.result')
    total = 0

    if(num > 200) {
        total = num * 0.45
    } else {
        total = num * 0.50
    }

    result.innerHTML = `O total da passagem para viajar ${num}km é R$ ${total.toFixed(2)}.`
}