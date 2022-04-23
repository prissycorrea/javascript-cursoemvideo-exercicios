function analisar() {
    var frase = document.querySelector('.frase').value.toLowerCase()
    var result = document.querySelector('.result')
    var busca = frase.indexOf('a')
    result.innerHTML = `A letra 'A' aparece ${(busca).length} vezes na frase.`
}