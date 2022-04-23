function tabuada() {
    op = Number(document.querySelector('.op').value)
    tabuada = document.querySelector('.selecTab')

    if(op.length == 0) {
        alert = 'Digite um número!'
    } else {
        tabuada.innerHTML = ''
        for(var count = 1; count <= 10; count++) {
        var item = document.createElement('option')
        item.text = `${op} x ${count} = ${op * count} `
        item.value = `tab${count}`
        tabuada.appendChild(item)
        }
    }
}