let num = [5, 2, 9, 3]
num[4] = 6
num.sort()
num.push(1)
console.log(num)
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var posi = num.indexOf(5) //há o valor 5 no meu array? me mostre a posição dele, se retornar -1, não encontrou
console.log(posi)
/*
for(var indice = 0; indice < num.length; indice++) {
    console.log(`A posição ${indice} tem o valor ${num[indice]}`)
}*/

//FOR SIMPLIFICADO
for(var indice in num) {
    console.log(`A posição ${indice} tem o valor ${num[indice]}`)
}

