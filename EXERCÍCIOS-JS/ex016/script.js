function contar() {
    let ini = document.getElementById('txti')   //String
    let fim = document.getElementById('txtf')   //String
    let passo = document.getElementById('txtp') //String
    let res = document.getElementById('res')    //String

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //Validando se não está faltando dados
        res.innerHTML = `&#128531 Não foi possível efetuar a contagem!<br/>Verfique os dados inseridos.`
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)   //Convertendo String para Number
        let f = Number(fim.value)   //Convertendo String para Number
        let p = Number(passo.value) //Convertendo String para Number

        if (p <= 0) {
            window.alert('Erro, vou considerar PASSO = 1')
            p = 1
        }

        if ( i < f) {
            //Contagem Crescente
            for (let c = i ; c <= f ; c+= p ) {
                res.innerHTML += ` ${c} \u{1F449}` //U+1F449	Emojii Unicode
            }
        }else {
            //Contagem Decrescente
            for (let c = i ; c >= f ; c -= p ) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}