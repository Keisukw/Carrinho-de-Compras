let produto = document.getElementById('produto');
let total = document.getElementById('valor-total');
let qtde = document.getElementById('quantidade');
let lista = document.getElementById('lista-produtos');
let listaProdutos = [];

qtde.value = 1;

listaProdutos.push(lista.innerText);

function adicionar() {
    if (qtde.value >= 1) {
        let valorProduto = valorToString(produto.value);
        let valorTotal = valorToString(total.innerText);
        let quantidade = qtde.value + 'x ';
        let nome = nomeProduto(produto.value);
        let valor = ' R$' + valorProduto;

        valorTotal += (valorProduto * qtde.value);
        total.innerHTML = 'R$' + valorTotal;
        
        listaProdutos.push(quantidade + nome + valor);

        let spanQuantidade = adicionarClasse('span', quantidade, 'texto-azul');
        let spanNome = adicionarClasse('span', nome, 'carrinho__produtos__produto');
        let spanValor = adicionarClasse('span', valor, 'texto-azul');

        let itemLista = document.createElement('section');
        itemLista.classList.add('carrinho__produtos__produto');

        itemLista.appendChild(spanQuantidade);
        itemLista.appendChild(spanNome);
        itemLista.appendChild(spanValor);

        lista.appendChild(itemLista);

        console.log(listaProdutos);

    } else {
        alert('Erro: preencha o campo quantidade corretamente');
    }
}

function valorToString(string) {
    let inicioValor = string.indexOf('R$') + 2;
    let fimValor = string.length;
    let valor = string.substring(inicioValor, fimValor);
    valor = parseFloat(valor);

    if(!isNaN(valor)){
        return valor;
    }
}

function nomeProduto(string) {
    let fimValor = string.indexOf('-') - 1;
    let nome = string.substring(0, fimValor);

    return nome;
}

function adicionarClasse(elemento, texto, classe) {
    let nomeElemento = document.createElement(elemento);
    nomeElemento.textContent = texto;
    nomeElemento.classList.add(classe);

    return nomeElemento;
}

function limpar() {
    qtde.value = 1;
    lista.innerHTML = '';
    total.innerHTML = ' R$' + 0;
}