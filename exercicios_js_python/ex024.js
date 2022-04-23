function analisar() {
    var cidade = document.querySelector('.cidade').value.toLowerCase()
    var result = document.querySelector('.result')
    var palavra = 'santo'
    var busca = cidade.indexOf(palavra)
    if (busca !== -1) {
        result.innerHTML = `Há Santo no nome da cidade ${cidade}.`
    } else {
        result.innerHTML = `Não há Santo no nome da cidade ${cidade}.`
    }
    
}