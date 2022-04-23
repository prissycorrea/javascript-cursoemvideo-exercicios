function analisar() {
    var nome = document.querySelector('.nome').value 
    var result = document.querySelector('.result')
    var array = nome.split(" ")
    result.innerHTML = `Seu primeiro nome é ${array[0]} e seu último nome é ${array.slice(-1)[0]}`
}