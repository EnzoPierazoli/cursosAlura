let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio')

function cliqueBotao(){
    console.log('O botao foi clicado');
}

function linguagemFav(){
    alert('Eu amo Js');
}

function nomeCidade(){
    cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de voce`)
}

function somar(){
    n1 = parseInt(prompt(`Digite o primeiro numero`));
    n2 = parseInt(prompt(`Digite o segundo numero`));
    soma = n1 + n2
    alert(soma);
}