function analisar() {
    analisar = document.querySelector('.nome').value
    array = analisar.split(" ")
    result = document.querySelector('.result')
    result.innerHTML = `Seu nome é ${analisar} <br> Seu nome em maiúsculas é ${analisar.toUpperCase()} <br> Seu nome em minúsculas é ${analisar.toLowerCase()} <br> Seu nome completo tem ${analisar.replace(/ /g, '').length} letras. <br> Seu primeiro tem ${array[0].length} letras.`
}