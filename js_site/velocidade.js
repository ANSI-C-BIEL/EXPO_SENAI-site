
/* Aula 18 de JS Conversor de Moedas  */

/* SELECIONAR ELEMENTOS */
// selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmVel')

// selecionar os elementos radios (criar um array deles)
let velSelecionada = document.getElementsByName('conversorDeVel')

let aviso = document.querySelector('#aviso')

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter')
console.log(btnConverter)
let btnLimpar    = document.querySelector('#btnLimpar')

// COTACOES DO DIA 21/09/2021   // 22/09/2021
let valorDoDolar   = 5.41      // 5.28
let valorDoEuro    = 6.23       // 6.20
let valorDaLibra   = 7.26       // 7.20
let valorDoBitcoin = 229762.85  // 224115,01 as 14:16 UTC ou 11:19
let valorEmReal    = 0

let velEstrangeira = ''
let velocidadeConvertida  = 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(velocidadeConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log("Velocidade Convertida " + velocidadeConvertida)
    aviso.textContent = "A velocidade " + (valorEmVel) + " convertido em " + velEstrangeira + " é " + velocidadeConvertida
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
    valorEmVel = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < velSelecionada.length; i++) {
        if(velSelecionada[i].checked) {
            velEstrangeira = velSelecionada[i].value
            console.log(velEstrangeira)
        }
    }

    /*
    Use uma estrutura escolha caso para escolher
    qual e a moeda estrangeira que foi selecionada
    */

// {moedaConvertida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// CONVERSAO DE MOEDAS
// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch(velEstrangeira) {
        
        case 'Dólar':
            velConvertida = valorEmVel * 1,60934
            mensagemFormatada(velConvertida)
        break

        case 'Euro':
            moedaConvertida = valorEmReal / 5.31
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Libra':
            moedaConvertida = valorEmReal / 6.030 
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Iene':
            moedaConvertida = valorEmReal / 0.037
            mensagemFormatada(moedaConvertida.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY', maximumSignificantDigits: 9}))
        break

        case 'DolarAu':
            moedaConvertida = valorEmReal / 3.47
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'AUD' }))
        break

        case 'Franco':
            moedaConvertida = valorEmReal / 5.50
            mensagemFormatada(moedaConvertida.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'}))
        break

        case 'DolarCa':
            moedaConvertida = valorEmReal / 3.92
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'CAD'}))
        break

        case 'Yuan':
            moedaConvertida = valorEmReal / 0.76
            mensagemFormatada(moedaConvertida.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY'}))
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    isNaN(velocidadeConvertida) ? velocidadeConvertida = 0 : ''
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
})
