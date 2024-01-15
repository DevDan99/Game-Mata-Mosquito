
//Função para iniciar jogo no onclick
function iniciarJogo() {
    var nivel = document.getElementById('nivel').value
    

    if (nivel === '') {
        alert('Selecione um nivel para começar o jogo')
        return false
    } else {
        window.location.href = "game.html?" + nivel
        //forma não convecional de passar parametros entre pagina.
    }
}
