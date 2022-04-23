function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(2, 5))
//console.log(soma(2)) se eu não passar o valor do segundo parâmetro, vai me retornar undefined/NaN caso o n1 e n2 no parametro formal não estivesse recebendo zero, mas como está, meu segundo parametro valerá zero.