function calcular() {
    let operacao = (document.getElementById("operacoes")).value;
    let primeiroValor = Number((document.getElementById("primeiroValor")).value);
    let segundoValor = Number((document.getElementById("segundoValor")).value);
    let total = Number();
    let resposta = ""

    if (operacao == "adicao") {
        total = primeiroValor + segundoValor;
        resposta = `${primeiroValor} + ${segundoValor} = ${total}`
    } else if (operacao == "subtracao") {
        total = primeiroValor - segundoValor;
        resposta = `${primeiroValor} - ${segundoValor} = ${total}`
    } else if (operacao == "multiplicacao") {
        total = primeiroValor * segundoValor;
        resposta = `${primeiroValor} * ${segundoValor} = ${total}`
    } else {
        total = primeiroValor / segundoValor;
        resposta = `${primeiroValor} / ${segundoValor} = ${total}`
    }

    document.getElementById("resultado").innerHTML = resposta;
}
