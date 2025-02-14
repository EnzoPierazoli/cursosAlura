let listaNomes = []
let nomesSorteados = [];

function adicionar() {
    const { nome, lista } = pegarInfosDoHTML();
    if (nome === '') {
        alert('É necessário digitar um nome para adiciona-lo')
    } else if (listaNomes.includes(nome)) {
        alert('Nome repetido, insira outro nome')
    } else {
        lista.innerHTML += `<p id="lista-amigos">${nome} </p>`;
        listaNomes.push(nome);
    }

}

function sortear() {
    const { sorteioFinal } = pegarInfosDoHTML();
    if (listaNomes.length < 3) {
        alert("Adicione pelo menos tres pessoas para o sorteio!");
        return;
    }

    let listaSorteio = [...listaNomes];
    let embaralhado = listaSorteio.sort(() => Math.random() - 0.5);

    for (let i = 0; i < embaralhado.length; i++) {
        let pessoa1 = embaralhado[i];
        let pessoa2 = embaralhado[(i + 1) % embaralhado.length];

        sorteioFinal.innerHTML = sorteioFinal.innerHTML + `<p id="lista-sorteio">${pessoa1} -> ${pessoa2}</p>`
    }
}

function reiniciar() {
    const { lista, sorteioFinal } = pegarInfosDoHTML();
    document.getElementById('nome-amigo').value = '';
    listaNomes = ([])
    nomesSorteados = ([])
    lista.innerHTML = ''
    sorteioFinal.innerHTML = ''
}

function pegarInfosDoHTML() {
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    let sorteioFinal = document.getElementById('lista-sorteio');

    // limpar o placeHolder 
    document.getElementById('nome-amigo').value = '';


    return { nome, lista, sorteioFinal };
}

function removerNome() {
    const { lista } = pegarInfosDoHTML();


    const elemento = lista.querySelector(`#lista-amigos`);

    if (elemento) {
        elemento.remove();
    }
}
