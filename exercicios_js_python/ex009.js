function multiplicar() {
    var num = parseInt(document.querySelector('.num').value)
    var result = document.querySelector('.result')
    result.innerHTML = `${num} x  1 = ${num * 1}<br> ${num} x  2 = ${num * 2}<br> ${num} x  3 = ${num * 3}<br> ${num} x  4 = ${num * 4}<br> ${num} x  5 = ${num * 5}<br> ${num} x  6 = ${num * 6}<br> ${num} x  7 = ${num * 7}<br> ${num} x  8 = ${num * 8}<br> ${num} x  9 = ${num * 9}<br> ${num} x 10 = ${num * 10}<br> `
}