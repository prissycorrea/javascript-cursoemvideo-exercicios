function analisar() {
    var n1 = parseInt(document.querySelector('.n1').value) 
    var n2 = parseInt(document.querySelector('.n2').value)
    var n3 = parseInt(document.querySelector('.n3').value)
    var result = document.querySelector('.result')
    var result2 = document.querySelector('.result2')
    
    var maior = n1

    if(n2 > maior) {
        maior = n2
    }
    if(n3 > maior) {
        maior = n3
    }
    result.innerHTML = `O maior número digitado é ${maior}.`

    menor = n1

    if(n2 < menor) {
        menor = n2
    }
    if(n3 < menor) {
        menor = n3
    }
    result2.innerHTML = `O menor número digitado é ${menor}.`
}