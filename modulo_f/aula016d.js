function fatorial(n) {
    let fat = 1
    for(let count = n; count > 1; count--) {
        fat *= count
    }
    return fat
}
console.log(fatorial(5))

//a conta de fatorial de 5 é: 5! = 5 x 4 x 3 x 2 x 1 = 120