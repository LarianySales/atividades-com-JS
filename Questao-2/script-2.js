const btnResultado = document.getElementById("promocao")

btnResultado.addEventListener('click' , () =>{
    let carro = document.getElementById('automovel')
    let preco = document.getElementById('Preco')
    let inCarro = document.getElementById('outCarro')
    let inPreco = document.getElementById('outPreco')

    let veiculo = inCarro.value
    let valor = inPreco.value
    
    if (isNaN(valor) || isNaN(veiculo)) {
        alert("Por favor, digite valores numéricos!")
        return
    }


    let entrada = valor / 2
    let parcela = valor / 12

    inCarro.textContent = `${veiculo}`
    inPreco.textContent = `Valor de entrada: ${entrada} \n valor da parcela: ${parcela}`
})
  