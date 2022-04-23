function converter() {
    var temp = parseFloat(document.querySelector('.temp').value)
    var result = document.querySelector('.result')
    result.innerHTML = `A temperatura de ${temp}°C em Fahrenheit é de ${temp * 1.8 + 32}°F.`
}