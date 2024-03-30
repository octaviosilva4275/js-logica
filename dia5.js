let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

function cadastrarProdutos() {
    let inicio = prompt("Você deseja cadastrar um produto na sua lista de compras?\nResponda com o número 1 para SIM ou 2 para NÃO.");

    if (inicio == 1) {
        inserirProduto();
    } else if (inicio == 2) {
        alert("Está bem! Fica pra outro dia!")
    } else {
        alert("Infelizmente não posso te ajudar se você não escolher entre Sim ou Não.")
    }
}

function inserirProduto() {

    let querCadastrar = true;

    while (querCadastrar == true) {
        let produto = prompt("Qual produto você deseja inserir?");
        let categoria = prompt("Em qual categoria está este produto?\n\n1- Frutas\n2- Laticínios\n3- Congelados\n4- Doces\n5- Outros");
    
        if (categoria == 1) {
            frutas.push(produto);
        } else if (categoria == 2) {
            laticinios.push(produto);
        } else if (categoria == 3) {
            congelados.push(produto);
        } else if (categoria == 4) {
            doces.push(produto);
        } else if (categoria == 5) {
            outros.push(produto);
        } else {
            alert("Categoria não encontrada.")
        }
    
        let novoCadastro = prompt("Você deseja cadastrar um novo produto?\nResponda com o número 1 para SIM ou 2 para NÃO.")
    
        if (novoCadastro == 1) {
            querCadastrar = true;
        } else if (novoCadastro == 2) {
            querCadastrar = false;
            exibirLista();
        } else {
            querCadastrar = false;
            alert("Infelizmente não posso te ajudar se você não escolher entre Sim ou Não.")
        }
    }
}

function exibirLista() {
    /*o método join exibe um array como string */
    alert(`Lista de compras\n\nFrutas: ${frutas.join(", ")}\nLaticínios: ${laticinios.join(", ")}\nCongelados: ${congelados.join(", ")}\nDoces: ${doces.join(", ")}\nOutros: ${outros.join(", ")}\n\nBoas compras!`)
}
