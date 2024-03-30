/*FALTA:
    ENTENDER PORQUE O WHILE NÃO ESTÁ FUNCIONANDO
    EXIBIR MENSAGEM COM O NÚMERO APÓS TRÊS TENTATIVAS
    IMPLEMENTAR NÚMERO RANDOMICO QUE SE MANTENHA ÚNICO NAS TRÊS TENTATIVAS
*/


let numeroSecreto = parseInt(Math.random() * 11);
let resposta = ""

/*declaração de função que compara números e imprime o resultado */
function chutarNumero() {

    /*criação de variável para armazenar id de onde será impresso o resultado na tela */
    let mensagem1 = document.getElementById("mensagem1");

    /*criação de variável que recebe o chute que o usuário inputou e transforma em número inteiro */
    let chute = parseInt(document.getElementById("chute").value);

    let tentativas = 0;

    while (tentativas < 4) {
        tentativas++;
 
        /*compara o chute do usuário com o número secreto */
        if (chute == numeroSecreto) {
            mensagem1.innerHTML = "Parabéns! Você acertou!";
            refresh;
    
        } else if (chute > 10 || chute < 0) {
            mensagem1.innerHTML = "Você deve escolher um número entre 0 e 10.";
    
        } else {
            mensagem1.innerHTML = "Ainda não foi desta vez.";
        }    
    }

}
