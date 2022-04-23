function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 6) {
                img.setAttribute('src', 'bebe-homem.jpg')
            } else if(idade < 12) {
                img.setAttribute('src', 'crianca-homem.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade < 6) {
                img.setAttribute('src', 'bebe-mulher.jpg')
            } else if(idade < 12) {
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'idoso-mulher.jpg')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //o append child indica que isso aparecerá abaixo do innerHTML acima
    }
}