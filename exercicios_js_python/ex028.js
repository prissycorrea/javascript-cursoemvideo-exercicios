function comparar() {
    var chute = parseInt(document.querySelector('.chute').value)
    var result = document.querySelector('.result')
    var numeroSecreto = Math.floor(Math.random() * 11)

    if(numeroSecreto == chute) {
        result.innerHTML = `Uhul! Você acertou!`
    } else {
        result.innerHTML = `Você errou! O número secreto era ${numeroSecreto}.`
    }
}