function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fAno = document.querySelector("#txtano")
    var res = document.querySelector('div#res')
    
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados inseridos!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') //Criando tag img
        img.setAttribute('id','foto') //Criando ID e dando nome
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', './assets/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', './assets/foto-jovem-m.png')                
            } else if (idade < 50) {
                img.setAttribute('src', './assets/foto-adulto-m.png')
            } else {
                img.setAttribute('src', './assets/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10) {
                //KID
                console.log('KID')
            } else if (idade < 21) {
                //Teen
            } else if (idade < 50) {
                //Adult
            } else {
                //Old
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} de ${idade} Anos!`
        res.appendChild(img).style.padding = '15px'
    }
}

