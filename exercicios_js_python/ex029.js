function multar() {
    var veloc = parseFloat(document.querySelector('.veloc').value)
    var result = document.querySelector('.result')
    var multa = 0

    if(veloc > 80) {
        multa = (veloc - 80) * 7
        result.innerHTML = `Você foi multado por andar ${veloc - 80}km acima dos 80km permitidos. <br>Total da multa: R$ ${multa.toFixed(2)}`
    } else {
        multa = 0
        result.innerHTML = `Parabéns, você estava a ${veloc} numa via de 80km/h. Você não foi multado.`
    }  
}