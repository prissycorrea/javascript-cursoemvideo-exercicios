function analisar() {
    var num = document.querySelector('.num').value
    var u = (num / 1 % 10).toFixed(0)
    var d = (num / 10 % 10).toFixed(0)
    var c = (num / 100 % 10).toFixed(0)
    var m = (num / 1000 % 10).toFixed(0)
    var result = document.querySelector('.result')
    result.innerHTML = `Unidade ${u} <br> Dezena ${d}<br> Centena ${c}<br> Milhar ${m}`
}