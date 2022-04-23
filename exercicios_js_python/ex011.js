function converter() {
    var largura = parseFloat(document.querySelector('.larg').value)
    var altura = parseFloat(document.querySelector('.alt').value)
    var result = document.querySelector('.result')
    result.innerHTML = `Para uma parede de ${largura}m x ${altura}m com área de ${(largura * altura).toFixed(2)}, será necessário ${(largura * altura / 2).toFixed(2)} litros de tinta.`
}