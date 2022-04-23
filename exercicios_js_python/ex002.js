function verificar() {
    var nome = document.querySelector('.nome')
    var bv = nome.value
    var text = document.querySelector('.text')
    text.innerHTML = `Seja bem-vindo(a), ${bv}!`
}