function converter() {
    var dinheiro = document.querySelector('.num').value 
    var result = document.querySelector('.result')
    var conv = (dinheiro / 4.70).toFixed(2)
    result.innerHTML = `Com R$ ${dinheiro} você pode comprar U$ ${conv}`
}