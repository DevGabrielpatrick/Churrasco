

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let comida = document.getElementsByClassName("texto-comida")
let alcool = document.getElementsByClassName("texto-alcool")
let bebidas = document.getElementsByClassName("texto-bebidas")
let resultado = document.getElementById("resultado")

function calcular(){
    
    console.log("Calculando...")
    
    let adultos= inputAdultos.value;
    let criancas= inputCriancas.value;
    let duracao= inputDuracao.value;
    let carne = 400
    let alcool = 0.5
    let bebidas = 1
    

    let qdtTotalCarne = duracao *  carne * adultos + (carne/2 * criancas)
    console.log(qdtTotalCarne)

    let qdtTotalAlcool = duracao * alcool * adultos

    let qtdtotalBebidas = duracao * bebidas * adultos + (bebidas/2 * criancas)

    console.log(qdtTotalAlcool, qdtTotalCarne,qtdtotalBebidas)
    resultado.style= 'display:inline-block'
    resultado.innerHTML = `
    <div id="comida">
    <img src="./imagens/logo.png" alt="churrasqueira" class="imagem">
    <p class="texto-comida">${qdtTotalCarne}g de carne</p>
    </div>
    <div id="alcool">
    <img src="./imagens/alcool.png" alt="alcool" class="imagem">
    <p class="texto-alcool">${qdtTotalAlcool} litro(s) de Bebidas álcoolicas</p>
    
    </div>
    <div id="bebidas">
    <img src="./imagens/Bebidas.png" alt="bebida" class="imagem">
    <p class="texto-bebidas">${qtdtotalBebidas} litros de Refrigerante</p>
    </div>`
}
