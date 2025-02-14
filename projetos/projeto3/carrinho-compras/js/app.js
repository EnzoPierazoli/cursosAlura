let totalCarrinho = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar() {
        // recuperar valores (nome do podruto, qnt, valor)
        
        const { nomeProduto, quantidade, valorUnitario } = recuperarDadosHTML();
        
        //calcular o preco
        
        calcularValorTotal(valorUnitario, quantidade);
        
        // add no carrinho
        
        adicionarCarrinho(nomeProduto, quantidade, valorTotal);
        
        // atualiar o valor total
        
        atualizarValorTotal();
        
        // zerar contador de quantidade
        
        document.getElementById('quantidade').value = 0
    }


function limpar() {
    totalCarrinho = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0'; 
}

function recuperarDadosHTML() {
    let Produto = document.getElementById('produto').value;
    let nomeProduto = Produto.split('-')[0];
    let valorUnitario = Produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Validacao se a quantidade e valida
    
    if (quantidade < 1) {
        alert("Você deve adicionar uma quantidade válida! Tente novamente")
    }
    else {
    return { nomeProduto, quantidade, valorUnitario };
    }
}

function calcularValorTotal(valorUnitario, quantidade) {
    return valorTotal = parseInt(valorUnitario * quantidade);
}

function adicionarCarrinho(nomeProduto, quantidade, valorTotal) {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul"> R$${valorTotal}</></section>`;
}

function atualizarValorTotal() {
    totalCarrinho = totalCarrinho + valorTotal
    let valorTotalCarrinho = document.getElementById('valor-total');
    valorTotalCarrinho.textContent = `R$ ${totalCarrinho}`;
}