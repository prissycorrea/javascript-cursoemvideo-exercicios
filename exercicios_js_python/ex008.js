function medida() {
    var num = parseFloat(document.querySelector('.num').value)
    var result = document.querySelector('.result')
    result.innerHTML = `Convertendo ${num}m: <br> Em milímetros ${num * 1000} mm <br> Em centímetros ${num * 100} cm <br> Em decímetros ${num * 10}dm <br> Em quilômetros ${num / 1000} km<br> Em hectômetro ${num / 100} hm <br> Em decâmetro ${num / 10} dam.`
}