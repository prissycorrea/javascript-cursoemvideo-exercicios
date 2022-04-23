function descobrir() {
    co = parseFloat(document.querySelector('.co').value)
    ca = parseFloat(document.querySelector('.ca').value)
    result = document.querySelector('.result')
    result.innerHTML = `A hipotenusa vai medir ${Math.hypot(co, ca).toFixed(2)}`
}