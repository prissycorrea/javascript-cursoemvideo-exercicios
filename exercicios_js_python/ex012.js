function converter() {
    var preco = parseFloat(document.querySelector('.preco').value).toFixed(2)
    var desc = parseInt(document.querySelector('.desc').value)
    var result = document.querySelector('.result')
    var valDesc = (preco / 100 * desc).toFixed(2)
    result.innerHTML = `Valor original: R$ ${preco} <br> Valor com desconto: R$ ${(preco - valDesc).toFixed(2)} <br> Você economiza R$ ${valDesc}`
}