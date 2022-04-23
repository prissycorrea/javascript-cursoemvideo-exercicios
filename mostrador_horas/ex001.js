function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = './img/manha.jpeg'
        document.body.style.background = '#6e7f49'
    } else if (hora >= 12 && hora < 19) {
        img.src = './img/tarde.jpg'
        document.body.style.background = '#f96700'
    } else {
        img.src = './img/noite.jpg'
        document.body.style.background = '#fba842'
    }
}
