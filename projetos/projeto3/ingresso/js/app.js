function comprar() {
    let { tipoIngresso, qntd, qntdPista, qntdInferior, qntdSuperior } = pegarInfosDoHTML();
    if (qntd <= 0) {
        alert('Nao e possivel comprar menos de 1 (uma) unidade, tente novamente!');
    } else {
        if (tipoIngresso === 'pista') {
            comprarPista(qntd, qntdPista);
        } else if (tipoIngresso === 'superior') {
            comprarSuperior(qntd, qntdSuperior);
        } else if (tipoIngresso === 'inferior') {
            comprarInferior(qntd, qntdInferior);
        }
    }
}

function pegarInfosDoHTML() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qntd = document.getElementById('qtd').value;
    let qntdPista = document.getElementById('qtd-pista');
    let qntdSuperior = document.getElementById('qtd-superior');
    let qntdInferior = document.getElementById('qtd-inferior');

    return { tipoIngresso, qntd, qntdPista, qntdInferior, qntdSuperior };
}

function comprarPista(qntd, qntdPista) {
    let disponiveis = Number(qntdPista.textContent);

    if (qntd > disponiveis) {
        alert('Nao possuimos essa quantidade de ingressos disponivel!');
    }
    else {
        qntdPista.textContent = disponiveis - qntd;
        alert('Compra realizada com sucesso');
    }
}


function comprarSuperior(qntd, qntdSuperior) {
    let disponiveis = Number(qntdSuperior.textContent);

    if (qntd > disponiveis) {
        alert('Nao possuimos essa quantidade de ingressos disponivel!');
    }
    else {
        qntdSuperior.textContent = disponiveis - qntd;
        alert('Compra realizada com sucesso');
    }

}

function comprarInferior(qntd, qntdInferior) {
    let disponiveis = Number(qntdInferior.textContent);

    if (qntd > disponiveis) {
        alert('Nao possuimos essa quantidade de ingressos disponivel!');
    }
    else {
        qntdInferior.textContent = disponiveis - qntd;
        qntdInferior.textcontent = qntdInferior;
        alert('Compra realizada com sucesso');
    }
}   