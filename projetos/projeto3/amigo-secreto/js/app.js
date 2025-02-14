let listaSorteados = [];
let resultadoSorteio = [];

function adicionar() {
    const { nome, lista} = pegarInfosDoHTML();
    lista.innerHTML += `<p id="lista-amigos">${nome} </p>`;
    listaSorteados.push(nome);
    
}

function sortear() {
    while (listaSorteados.length > 0) {
        let indiceSorteado1 = Math.floor(Math.random() * listaSorteados.length);
        let nomeSorteado1 = listaSorteados[indiceSorteado1];
        listaSorteados.splice(indiceSorteado1, 1);
        
        let indiceSorteado2 = Math.floor(Math.random() * listaSorteados.length);
        let nomeSorteado2 = listaSorteados[indiceSorteado2];
        listaSorteados.splice(indiceSorteado2, 1);

        alert(`O ${nomeSorteado1} tirou o ${nomeSorteado2}`);
    }
}
function reiniciar() {
    let listaSorteados = ['']

}

function pegarInfosDoHTML() {
    let nome = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    // limpar o placeHolder 
    document.getElementById('nome-amigo').value = '';


    return { nome, lista};
}