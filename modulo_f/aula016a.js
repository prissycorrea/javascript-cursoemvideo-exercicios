function parImp(n) {
    if(n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

var res = parImp(11) // p resultado da minha função vai ser jogado dentro desta variável
//console.log(parImpar(4)) - desta forma não preciso jogar o valor dentro da variável, apenas imprimo ela.
console.log(res)