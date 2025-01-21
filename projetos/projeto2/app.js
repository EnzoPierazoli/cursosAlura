let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector(`input`).value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', `Acertou`);
        let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa`;
        exibirTextoNaTela('p', `Voce descobriu com ${tentativas} ${palavraTentativas}!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O numero secreto e menor`);
        } else {
            exibirTextoNaTela('p', `O numero secreto e maior`);
        }
        tentativas++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;
}

function reinicarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibirTextoNaTela(`h1`, `Jogo do numero secreto`);
    exibirTextoNaTela(`p`, `Escolha um numero de 1 a 10`);
}