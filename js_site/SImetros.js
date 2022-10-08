

let valorDigitado = document.querySelector('#valorEmMetros')


let unidadeDeMedida = document.getElementsByName('conversorDeMetros')

let aviso = document.querySelector('#aviso')


let btnConverter = document.querySelector('#btnConverter')
let btnLimpar    = document.querySelector('#btnLimpar')

let valorEmMetros    = 0

let conversorDeMetros = ''
let metrosConvertido  = 0.00 // 0.00


function mensagemFormatada(metrosConvertida) {
    isNaN(valorEmMetros) ? valorEmMetros = 0 : ''
    console.log("Moeda Convertida " + metrosConvertida)
    aviso.textContent = "O valor em metros = " + (valorEmMetros) + " convertido em " + conversorDeMetros + " é " + metrosConvertida
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
    
    valorEmMetros = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < unidadeDeMedida.length; i++) {
        if(unidadeDeMedida[i].checked) {
            conversorDeMetros = unidadeDeMedida[i].value
            console.log(conversorDeMetros)
        }
    }

  
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
