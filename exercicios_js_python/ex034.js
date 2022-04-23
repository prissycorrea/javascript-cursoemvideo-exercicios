function calcular() {
    var sal = parseInt(document.querySelector('.sal').value) 
    var sal2 = parseInt(document.querySelector('.sal2').value) 
    var nome1 = document.querySelector('.nome1').value
    var nome2 = document.querySelector('.nome2').value
    var result = document.querySelector('.result')
    var result2 = document.querySelector('.result2')
    var result3 = document.querySelector('.result3')
    if(sal > 1250) {
        aum = 10
        valorAdic = sal / 100 * aum
    } else {
        aum = 15
        valorAdic = sal / 100 * aum
    }
    result.innerHTML = `O salário do funcionário ${nome1} R$ ${sal} com aumento de ${aum}% passará a ser R$ ${sal + valorAdic}. Você receberá R$ ${valorAdic} a mais.`
    if(sal2 > 1250) {
        aum = 10
        valorAdic2 = sal2 / 100 * aum
    } else {
        aum = 15
        valorAdic2 = sal2 / 100 * aum
    }
    result2.innerHTML = `O salário do funcionário ${nome2} R$ ${sal2} com aumento de ${aum}% passará a ser R$ ${sal2 + valorAdic2}. Você receberá R$ ${valorAdic2} a mais.`

    if(valorAdic > valorAdic2) {
        result3.innerHTML = `O maior aumento de salário é de ${nome1}, ganhando R$ ${valorAdic
        } a mais`
    } else {
        result3.innerHTML = `O maior aumento de salário é de ${nome2}, ganhando R$ ${valorAdic2} a mais.`
    }
}