function fatura() {
    var dias = parseInt(document.querySelector('.dias').value)
    var km = parseFloat(document.querySelector('.km').value)
    var totalKm = parseFloat(km * 0.15)
    var totalDias = parseFloat(dias * 60)
    result = document.querySelector('.result')
    result.innerHTML = `Resumo da fatura<br> Dias alugados: ${dias}..................${totalDias.toFixed(2)}<br> Kms percorridos: ${km}km.............R$ ${totalKm}<br> Total a pagar:......................R$ ${totalDias + totalKm}`
}