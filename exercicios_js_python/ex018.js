function descobrir() {
    ang = parseInt(document.querySelector('.ang').value)
    var graus = ang / (180 / Math.PI)
    result = document.querySelector('.result')
    sen = Math.sin(graus).toFixed(2)
    cos = Math.cos(graus).toFixed(2)
    tan = Math.tan(graus).toFixed(2)
    result.innerHTML = `O ângulo de ${ang} tem o seno de ${sen}, o cosseno de ${cos} e a tangente de ${tan}.`
}