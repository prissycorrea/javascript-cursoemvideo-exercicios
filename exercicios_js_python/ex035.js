function analisar() {
    var s1 = parseFloat(document.querySelector('.s1').value)
    var s2 = parseFloat(document.querySelector('.s2').value)
    var s3 = parseFloat(document.querySelector('.s3').value)
    var result = document.querySelector('.result')

    if(s1 !== s2 && s2 !== s3) {
        result.innerHTML = `Esses valores formam um triângulo escaleno.`
    } else if(s1 == s2 && s2 == s3) {
        result.innerHTML = `Esses valores formam um triângulo equilátero.`
    } else {
        result.innerHTML = `Esses valores formam um triângulo isósceles.`
    }
}