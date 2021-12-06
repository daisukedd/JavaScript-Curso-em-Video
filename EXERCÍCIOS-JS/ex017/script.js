function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selTab')

    if (num.value.length == 0) {
        window.alert('Erro! Digite um número.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Limpa o Select antes de executrar o while
        while ( c <= 10) {
            let item = document.createElement('option') //Criando Elemento dentro do Select - Options seria as selecoes 
            item.text = `${n} X ${c} = ${n*c}` //Inserindo elementos
            tab.appendChild(item) //Adicionando ao elemento filho
            c++
        }
    }

}