function analisar() {
    var nomeOrig = document.querySelector('.nome').value
    var nome = document.querySelector('.nome').value.toLowerCase()
    var result = document.querySelector('.result')
    var palavra = 'silva'
    var busca = nome.indexOf(palavra)
    if (busca !== -1) {
        result.innerHTML = `Há Silva no nome ${nomeOrig}`
    } else {
        result.innerHTML = `Não há Silva no nome ${nomeOrig}`
    }
}