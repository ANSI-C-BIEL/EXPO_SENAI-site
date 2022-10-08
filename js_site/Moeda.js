/* SELECIONAR ELEMENTOS */
// selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmReal')

// selecionar os elementos radios (criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter')
console.log(btnConverter)
let btnLimpar    = document.querySelector('#btnLimpar')

let valorEmReal    = 0

let moedaEstrangeira = ''
let moedaConvertida  = 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

/* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */
function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

// REATIVAR BOTAO
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

// VERIFICAR QUAL BOTAO RADIO ESTA MARCADO checked ou checked == true
// vincular a verificacao a um evento, click no botao Converter
btnConverter.addEventListener('click', function() {
    // FAZER o parseFloat dos valores monetarios (converter String para Float)
    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    /*
    Use uma estrutura escolha caso para escolher
    qual e a moeda estrangeira que foi selecionada
    */

// {moedaConvertida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// CONVERSAO DE MOEDAS
// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch(moedaEstrangeira) {
        
        case 'Dólar':
            moedaConvertida = valorEmReal / 5.20
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / 5.07
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Libra':
            moedaConvertida = valorEmReal / 5.76
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Iene':
            moedaConvertida = valorEmReal / 0.036
            mensagemFormatada(moedaConvertida.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY', maximumSignificantDigits: 9}))
        break

        case 'DolarAu':
            moedaConvertida = valorEmReal / 3.32
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'AUD' }))
        break

        case 'Franco':
            moedaConvertida = valorEmReal / 5.23
            mensagemFormatada(moedaConvertida.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'}))
        break

        case 'DolarCa':
            moedaConvertida = valorEmReal / 3.78
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'CAD'}))
        break

        case 'Yuan':
            moedaConvertida = valorEmReal / 0.73
            mensagemFormatada(moedaConvertida.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'}))
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
    moedaSelecionada[4].checked = false
    moedaSelecionada[5].checked = false
    moedaSelecionada[6].checked = false
    moedaSelecionada[7].checked = false
    moedaSelecionada[8].checked = false
    moedaSelecionada[9].checked = false
    moedaSelecionada[10].checked = false
})
