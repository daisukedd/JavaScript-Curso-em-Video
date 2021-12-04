function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fAno = document.querySelector("#txtano")
    var res = document.querySelector('div#res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados inseridos!')
    } else {
        window.alert('Tudo OK!')
    }
}

