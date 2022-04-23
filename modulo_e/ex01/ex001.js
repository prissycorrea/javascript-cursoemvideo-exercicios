function contar() {
    var inicio = Number(document.querySelector('.inicio').value)
    var fim = Number(document.querySelector('.fim').value)
    var passo = Number(document.querySelector('.passo').value)
    var result = document.querySelector('.result')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('ERRO! Dados faltantes.')
    }
    if (inicio < fim){
        result.innerHTML = 'Contando:<br>'
        for(var count = inicio; count <= fim; count += passo) {
            result.innerHTML += `${count} \u{2B50} `
        }
        result.innerHTML += `\u{1f320}`
    } else {
        result.innerHTML = 'Contando:'
        for(var count = inicio; count >= fim; count -= passo) {
            result.innerHTML += `${count} \u{2B50} `
        }
        result.innerHTML += `\u{1f320}`
    }
}