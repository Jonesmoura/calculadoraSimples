const resultado = document.querySelector('#resultado')
let ultimoResultadoCalculado = 0

function addValorclickado(valor){

    if(!resultado.value){
        resultado.value = ''
    }

    resultado.value += valor
   
}

function calcular(valor){

    let calculado = eval(valor)

    if(isNaN(calculado)){
        resultado.value='Math Error!'
        // definir em quanto tempo a mensagem acima será modificada(no caso excluida)
        setTimeout(()=> {resultado.value =''},1500)

    }else{

        resultado.value = calculado
        ultimoResultadoCalculado = calculado

    }

}

function apagarUltimoDigito(){

    let resultadoAtual = resultado.value

    resultado.value = resultadoAtual.substring(0, resultado.value.length - 1)

}

function imprimirUltimoResultado(){

    resultado.value += ultimoResultadoCalculado


}

document.addEventListener('keydown',teclaEAcao)

function teclaEAcao(tecla){


    // para cancelar o evento da tecla e adicionarmos manualmente a ação que desejamos abaixo
    tecla.preventDefault()

    // adicionar numeros

    if(tecla.key=== '0'){

        resultado.value +='0'

    } else if(tecla.key === '1'){

        resultado.value += '1'

    } else if(tecla.key === '2'){

        resultado.value += '2'

    } else if(tecla.key === '3'){

        resultado.value += '3'

    } else if(tecla.key === '4'){

        resultado.value += '4'

    } else if(tecla.key === '5'){

        resultado.value += '5'

    } else if(tecla.key === '6'){

        resultado.value += '6'

    } else if(tecla.key === '7'){

        resultado.value += '7'

    } else if(tecla.key === '8'){

        resultado.value += '8'

    } else if (tecla.key === '9'){

        resultado.value += '9'

    }

    // adiconar ponto flutuante

    if(tecla.key === '.' || tecla.key === ','){

        resultado.value += '.'

    }

    //Adicionar operador

    if(tecla.key === '+'){

        resultado.value += '+'

    } else if(tecla.key === '-'){

        resultado.value += '-'

    } else if(tecla.key === '*'){

        resultado.value += '*'

    } else if (tecla.key === '/'){

        resultado.value += '/'

    }

    // calcular valor ao teclar enter

    if(tecla.key === 'Enter'){

        calcular(resultado.value)

    }

    // usar o backspace para apagar o último digito 

    if(tecla.key === 'Backspace'){

        let resultadoAtual = resultado.value

        resultado.value = resultadoAtual.substring(0, resultado.value.length - 1)

    }

    // Usando a tecla C como clear

    if(tecla.key === 'c'){

        resultado.value = ''

    }

    // acessar ultimo resultado

    if(tecla.key === 'r'){

        resultado.value += ultimoResultadoCalculado

    }


}

