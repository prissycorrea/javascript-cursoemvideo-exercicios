function analisarAno() {
    var ano = document.querySelector('.ano').value 
    var result = document.querySelector('.result')
    var today = new Date()
    if(ano == 0) {
        ano = today.getFullYear()
        result.innerHTML = `hell`
    }
    if(ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0) {
        result.innerHTML = `O ano ${ano} é bissexto.`
    } else {
        result.innerHTML = `O ano ${ano} não é bissexto.`
    }
}