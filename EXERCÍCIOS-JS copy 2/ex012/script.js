function carregar(){
    var msg = document.getElementById('msg')
    //var imagem = document.getElementById('round-photo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São ${hora} Horas!`

}