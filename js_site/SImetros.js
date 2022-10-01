
/* Aula 18 de JS Conversor de Moedas  */

/* SELECIONAR ELEMENTOS */
// selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmMetros')

// selecionar os elementos radios (criar um array deles)
let unidadeDeMedida = document.getElementsByName('conversorDeMetros')

let aviso = document.querySelector('#aviso')

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar    = document.querySelector('#btnLimpar')

// COTACOES DO DIA 21/09/2021   // 22/09/2021
let valorDoDolar   = 5.31       // 5.28
let valorDoEuro    = 6.23       // 6.20
let valorDaLibra   = 7.26       // 7.20
let valorDoBitcoin = 229762.85  // 224115,01 as 14:16 UTC ou 11:19
let valorEmMetros    = 0

let conversorDeMetros = ''
let metrosConvertido  = 0.00 // 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(metrosConvertida) {
    isNaN(valorEmMetros) ? valorEmMetros = 0 : ''
    console.log("Moeda Convertida " + metrosConvertida)
    aviso.textContent = "O valor em metros = " + (valorEmMetros) + " convertido em " + conversorDeMetros + " é " + metrosConvertida
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
    valorEmMetros = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < unidadeDeMedida.length; i++) {
        if(unidadeDeMedida[i].checked) {
            conversorDeMetros = unidadeDeMedida[i].value
            console.log(conversorDeMetros)
        }
    }

    /*
    Use uma estrutura escolha caso para escolher
    qual e a moeda estrangeira que foi selecionada
    */

// {moedaConvertida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// CONVERSAO DE MOEDAS
// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch(conversorDeMetros) {
        
        case 'KM':
            metrosConvertido = valorEmMetros * 1000
            mensagemFormatada(metrosConvertido)
        break

        case 'HM':
            metrosConvertido = valorEmMetros * 100
            mensagemFormatada(metrosConvertido)
        break

        case 'DAM':
            metrosConvertido = valorEmMetros * 10
            mensagemFormatada(metrosConvertido)
        break

        case 'M':
            metrosConvertido = valorEmMetros  
            mensagemFormatada(metrosConvertido)
        break
        
        case 'DM':
            metrosConvertido = valorEmMetros / 10
            mensagemFormatada(metrosConvertido)
        break

        case 'CM':
            metrosConvertido = valorEmMetros / 100
            mensagemFormatada(metrosConvertido)
        break 

        case 'MM':
            metrosConvertido = valorEmMetros / 1000
            mensagemFormatada(metrosConvertido)
        break

        default:
            aviso.textContent = 'Escolha uma unidade de medida'
    }
    isNaN(metrosConvertido) ? metrosConvertido = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite um valor do SI para converter'
    unidadeDeMedida[0].checked = false
    unidadeDeMedida[1].checked = false
    unidadeDeMedida[2].checked = false
    unidadeDeMedida[3].checked = false
    unidadeDeMedida[4].checked = false
    unidadeDeMedida[5].checked = false
    unidadeDeMedida[6].checked = false
    unidadeDeMedida[7].checked = false
})
