function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    if (imagem.classList.contains('dashboard__item__img--rented')){
        let confirmacao = prompt('Voce gostaria mesmo de devolver seu jogo? \n Digite 1 - SIM // 2 - NAO');
        if (confirmacao == 1) {
            botao.textContent = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
        } else {
            alert('Tudo bem, assim que quiser estamos aqui para receber sua devolução!');
        }
    } else {
        jogosAlugados();
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        botao.classList.add('verificarAlugado')
    }
}
let jogos = 0

function jogosAlugados(){
    jogos ++
    let quantidadeJogos = jogos > 1 ? 'jogos' : 'jogo';
    alert(`Voce ja alugou ${jogos} ${quantidadeJogos} conosco!`);
}

