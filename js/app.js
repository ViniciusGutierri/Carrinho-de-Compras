let total = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let qtde = document.getElementById('quantidade').value;
    
    // Verificar se o produto selecionado é válido
    if (produto == "Selecione") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(qtde) || qtde <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valUnitario = produto.split('R$')[1];
    let preco = qtde * valUnitario;

    let carrinho = document.getElementById('lista-produtos');
    let carrinhoTotal = document.getElementById('valor-total');

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtde}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    total += preco;
    carrinhoTotal.innerHTML = `R$${total}`;
    document.getElementById('quantidade').value = 0;
    document.getElementById('produto').value = 'Selecione';
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerText = 'R$ 0';
    document.getElementById('produto').value = 'Selecione';
}