function sortear() {
    var aluno1 = document.querySelector('.a1').value
    var aluno2 = document.querySelector('.a2').value
    var aluno3 = document.querySelector('.a3').value
    var aluno4 = document.querySelector('.a4').value
    var lista = [aluno1, aluno2, aluno3, aluno4]
    var sorteia = lista.sort()
    var result = document.querySelector('.result')
    result.innerHTML = `A ordem de apresentação: ${sorteia}`
}