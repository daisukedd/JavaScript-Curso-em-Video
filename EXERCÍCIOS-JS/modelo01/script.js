function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('round-photo')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `São ${hora} Horas!`

    if (hora >= 0 && hora < 12) {
        img.src = './assets/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './assets/afternoon.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = './assets/night.png'
        document.body.style.background = '#515154'
    }

}