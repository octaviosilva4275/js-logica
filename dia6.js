
let querCadastrar = true;
let remedios = []
let produtosDeHigiene = []
let cosmeticos = []
let infantil = []

function cadastrarProdutosDiaSeis() {
    let inicioDiaSeis = prompt("Você deseja cadastrar um produto na sua lista de compras?\nResponda com o número 1 para SIM ou 2 para NÃO.");

    if (inicioDiaSeis == 1) {
        inserirProdutoDiaSeis();
    } else if (inicioDiaSeis == 2) {
        alert("Está bem! Fica pra outro dia!")
    } else {
        alert("Infelizmente não posso te ajudar se você não escolher entre Sim ou Não.")
    }
}

function inserirProdutoDiaSeis() {

    while (querCadastrar == true) {
        let produtoDiaSeis = prompt("Qual produto você deseja inserir?");
        let categoriaDiaSeis = prompt("Em qual categoria está este produto?\n\n1- Remédios\n2- Produtos de Higiene\n3- Cosméticos\n4- Infantil");
    
        if (categoriaDiaSeis == 1) {
            remedios.push(produtoDiaSeis);
        } else if (categoriaDiaSeis == 2) {
            produtosDeHigiene.push(produtoDiaSeis);
        } else if (categoriaDiaSeis == 3) {
            cosmeticos.push(produtoDiaSeis);
        } else if (categoriaDiaSeis == 4) {
            infantil.push(produtoDiaSeis);
        } else {
            alert("Categoria não encontrada.")
        }

        let proximoPasso = prompt("Você deseja cadastrar um novo produto, remover ou encerrar a lista?\n\nResponda com o número 1 para Adicionar, 2 para Remover ou 3 para Encerrar.")
    
        if (proximoPasso == 1) {
            querCadastrar = true;
            inserirProdutoDiaSeis();
        } else if (proximoPasso == 2) {
            querCadastrar = false;
            removerProduto();
        } else if (proximoPasso == 3) {
            querCadastrar = false;
            exibirListaDiaSeis();
        } else {
            querCadastrar = false;
            alert("Infelizmente não posso te ajudar se você não escolher entre Sim ou Não.")
        }
    }    
}

function removerProduto() {
    //let todosOsItens = remedios.concat(produtosDeHigiene, cosmeticos, infantil);
    let produtoParaRemover = prompt("Qual produto você deseja remover?");
    let index = new Number();

    if (remedios.includes(produtoParaRemover)) {

        index = remedios.indexOf(produtoParaRemover);
        remedios.splice(index, 1)

    } else if (produtosDeHigiene.includes(produtoParaRemover)) {

        index = produtosDeHigiene.indexOf(produtoParaRemover);
        produtosDeHigiene.splice(index, 1);

    } else if (cosmeticos.includes(produtoParaRemover)) {

        index = cosmeticos.indexOf(produtoParaRemover);
        cosmeticos.splice(index, 1);

    } else if (infantil.includes(produtoParaRemover)) {

        index = infantil.indexOf(produtoParaRemover);
        infantil.splice(index, 1);

    } else {
        alert("Produto não localizado.")
    }

    exibirListaDiaSeis();
}


function exibirListaDiaSeis() {
    /*o método join exibe um array como string */
    alert(`Lista de compras\n\nRemédios: ${remedios.join(", ")}\nProdutos de Higiene: ${produtosDeHigiene.join(", ")}\nCosméticos: ${cosmeticos.join(", ")}\nInfantil: ${infantil.join(", ")}\n\nBoas compras!`)
}
