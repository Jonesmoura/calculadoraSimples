resultado = document.querySelector('#resultado')

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

    }

}
