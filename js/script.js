/*Definindo tamanho do palco do jogo. 
Usando innerHeight e innerwidth. dessa forma quando o usúario alterar o tamanho da tela esses valores seram capturados */
var altura = 0
var largura = 0
var pontos = 1
var vidas = 1
var tempo = 10
var nivelPadrao = 1500

//recuperando parametro da pagina
var nivel = window.location.search //o seacher pega tudo que esta a direita do ?, inclusive o ?
nivel = nivel.replace('?', '') // o replace subtitui o valor encontrado.

if (nivel === 'normal') {
    //1500
    nivelPadrao = 1500
} else if (nivel === 'dificil') {
    //1000
    nivelPadrao = 1000
}else if (nivel === 'hardCore') {
    //750
    nivelPadrao = 750
} 



//console.log(document.getElementById('pontos'))

function ajustaPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaPalcoJogo()

//criando cronometro do game
var cronometro = setInterval(function() {
    tempo -= 1//precisa tirar o tempo antes

    if(tempo < 0){
       clearInterval(cronometro)
       clearInterval(criaMosquito)
       window.location.href = 'vitoria.html'
    } else{
    document.getElementById('tempo').innerHTML = tempo
    }//innerHTML é o valor que esta entre as tags
},1000)

//crando toda a logica do jogo.
function positionRandom() {
//verifica se o elemento exite, se existe exclui
if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
    
    //conferindo se cada vez que o código rodar vida é maior que 3
    if(vidas > 3){

        window.location.href = 'fim_de_jogo.html'
    } else {
    document.getElementById('v'+ vidas).src ="../Imagens/coracao_vazio.png"
    vidas++
    }
}

//Criando possições randomicas
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

//controla o valor ser menor que 0
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

//criando elemento html pelo js
//criando elementento img
var mosquito = document.createElement('img')
mosquito.src = '../Imagens/mosca.png'
mosquito.className = tamRandom() + ' ' + escalaRandom()

//posicionando o mosquito de forma randomica
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito' 
mosquito.onclick = function() {
    this.remove() //this faz referencia ao elemento que execulta a função.
    document.getElementById('ponto').innerHTML = pontos
    pontos++
}

//criando elemento filho do body
document.body.appendChild(mosquito)
}

//deixando os tamnho do mosquito aleatorio
function tamRandom () {
    var classe = Math.floor(Math.random() * 3 )

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//inverte os lados da imagem
function escalaRandom () {
    var classe = Math.floor(Math.random()* 3)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        case 2:
            return 'ladoC'
    }
}
