

let valorDigitado = document.querySelector('#valorEmMetros2')


let moedaSelecionada = document.getElementsByName('areaEstrangeira')

let aviso = document.querySelector('#aviso')


let btnConverter = document.querySelector('#btnConverter')
let btnLimpar    = document.querySelector('#btnLimpar')


let valorEmReal    = 0

let areaEstrangeira = ''
let areaConvertida  = 0.00


function mensagemFormatada(areaEstrangeira) {
    isNaN(valorEmByte) ? valorEmByte = 0 : ''
    console.log("Moeda Convertida " + areaEstrangeira)
    aviso.textContent = "O valor em metro" + (valorEmByte) + " convertido em " + areaEstrangeira + " é " + areaEstrangeira
}


function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}


function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}


btnConverter.addEventListener('click', function() {
    valorEmByte = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < areaEstrangeira.length; i++) {
        if(areaEstrangeira[i].checked) {
            areaEstrangeira = areaEstrangeira[i].value
            console.log(areaEstrangeira)
        }
    }

   

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