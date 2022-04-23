var num = document.querySelector('.num')
var lista = []
var adicionaLista = document.querySelector('.campoNum')
var result = document.querySelector('.result')

//VERIFICA SE O VALOR DIGITADO É UM NUMERO ENTRE 1 E 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
    return true
    } else {
        return false
    }
}

//VERIFICA SE O VALOR DIGITADO JÁ SE ENCONTRA NA LISTA
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//ADICIONA O VALOR AO SELECT
function adicionar() {
        if(isNumero(num.value) && !inLista(num.value, lista)) {
            lista.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Número ${num.value} adicionado.`
            adicionaLista.appendChild(item)
        } else {
            alert('Número inválido ou já existente.')
        }
        num.value = ''
        num.focus()
}

function analisar() {
    if(lista.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        var total = lista.length
        var maiorNum = lista[0]
        var menorNum = lista[0]
        var soma = 0
        var media = 0
            for(var pos in lista) {
                soma += lista[pos]
                if(lista[pos] > maiorNum) {
                    maiorNum = lista[pos]
                }
                if(lista[pos] < menorNum) {
                    menorNum = lista[pos]
                }
            }
        var media = soma / total
        result.innerHTML += ''
        result.innerHTML += `<p>Total de ${total} valores adicionados.</p>`
        result.innerHTML += `<p>O maior número adicionado é ${maiorNum}</p>`
        result.innerHTML += `<p>O menor número adicionado é ${menorNum}</p>`
        result.innerHTML += `<p>A soma de todos os valores adicionados é ${soma}</p>`
        result.innerHTML += `<p>A média entre todos os valores adicionados é ${media.toFixed(1)}</p>`
    }
}