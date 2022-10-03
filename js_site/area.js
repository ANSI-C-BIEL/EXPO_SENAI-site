
/* Aula 18 de JS Conversor de Moedas  */

/* SELECIONAR ELEMENTOS */
// selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmMetros2')

// selecionar os elementos radios (criar um array deles)
let moedaSelecionada = document.getElementsByName('areaEstrangeira')

let aviso = document.querySelector('#aviso')

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar    = document.querySelector('#btnLimpar')

// COTACOES DO DIA 21/09/2021   // 22/09/2021
let valorDoDolar   = 5.31       // 5.28
let valorDoEuro    = 6.23       // 6.20
let valorDaLibra   = 7.26       // 7.20
let valorDoBitcoin = 229762.85  // 224115,01 as 14:16 UTC ou 11:19
let valorEmReal    = 0

let areaEstrangeira = ''
let areaConvertida  = 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(areaEstrangeira) {
    isNaN(valorEmByte) ? valorEmByte = 0 : ''
    console.log("Moeda Convertida " + areaEstrangeira)
    aviso.textContent = "O valor em metro" + (valorEmByte) + " convertido em " + areaEstrangeira + " é " + areaEstrangeira
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
    valorEmByte = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < areaEstrangeira.length; i++) {
        if(areaEstrangeira[i].checked) {
            areaEstrangeira = areaEstrangeira[i].value
            console.log(areaEstrangeira)
        }
    }

    /*
    Use uma estrutura escolha caso para escolher
    qual e a moeda estrangeira que foi selecionada
    */

// {moedaConvertida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// CONVERSAO DE MOEDAS
// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch(areaEstrangeira) {
        
        case 'pes':
            areaConvertida = valorEmMetros2 / 0.092903
            mensagemFormatada(areaConvertida)
        break

        default:
            aviso.textContent = 'Escolha uma alternativa'
    }
    isNaN(areaEstrangeira) ? areaEstrangeira = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    areaEstrangeira[0].checked = false
    areaEstrangeira[1].checked = false
    areaEstrangeira[2].checked = false
    areaEstrangeira[3].checked = false
    areaEstrangeira[4].checked = false
    areaEstrangeira[5].checked = false
    areaEstrangeira[6].checked = false
    areaEstrangeira[7].checked = false

})