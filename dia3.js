
let todasAsTecnologias = [];

/*primeira camada da árvore: escolher entre front-end e back-end */
function frontEnd() {
    /*onde será impressa a mensagem*/
    let grandeArea = document.getElementById("grandeArea");
    grandeArea.innerHTML = "Maravilha! Front-End é muito legal! E você vai serguir com React ou Vue?"
    
    /*para mudar a cor do background para verde em front-end*/
    let botaoFrontEnd = document.getElementById("frontEnd");
    botaoFrontEnd.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção back-end*/
    let botaoBackEnd = document.getElementById("backEnd");
    botaoBackEnd.disabled = true;
                        
    /*para mostrar a trilha de front-end*/
    let botaoReact = document.getElementById("react")
    botaoReact.style.display = 'inline';
    let botaoVue = document.getElementById("vue");
    botaoVue.style.display = 'inline';

    todasAsTecnologias.push("Trilha de Front-End ");
}

function backEnd() {
    /*onde será impressa a mensagem*/
    let grandeArea = document.getElementById("grandeArea");
    grandeArea.innerHTML = "Maravilha! Amo Back-End! E você vai serguir com C# ou Java?"
    
    /*para mudar a cor do background para verde em back-end*/
    let botaoBackEnd = document.getElementById("backEnd");
    botaoBackEnd.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção front-end*/
    let botaoFrontEnd = document.getElementById("frontEnd");
    botaoFrontEnd.disabled = true;
                        
    /*para mostrar a trilha de front-end*/
    let botaoC = document.getElementById("c#")
    botaoC.style.display = 'inline';
    let botaoJava = document.getElementById("java");
    botaoJava.style.display = 'inline';

    todasAsTecnologias.push("Trilha de Back-End ");
}

/*segunda camada da árvore: escolher subareas dentro de front-end e back-end */
function escolheReact() {
    /*para mudar a cor do background para verde em react
    botaoReact.style.backgroundColor = 'green'; */
    let botaoReact = document.getElementById("react");
    botaoReact.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção vue
    botaoVue.style.display = 'none';    */
    let botaoVue = document.getElementById("vue");
    botaoVue.disabled = true;

    todasAsTecnologias.push(" com framework React");
    
    escolheEstrategia();
}

function escolheVue() {
    /*para mudar a cor do background para verde em vue*/
    let botaoVue = document.getElementById("vue");
    botaoVue.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção react*/
    let botaoReact = document.getElementById("react")
    botaoReact.disabled = true;

    todasAsTecnologias.push(" com framework Vue");

    escolheEstrategia();
}

function escolheC() {
    /*para mudar a cor do background para verde em c#
    botaoC.style.backgroundColor = 'green'; */
    let botaoC = document.getElementById("c#");
    botaoC.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção java
    botaoJava.style.display = 'none';    */
    let botaoJava = document.getElementById("java");
    botaoJava.disabled = true;

    todasAsTecnologias.push(" com desenvolvimento C#");
    
    escolheEstrategia();
}

function escolheJava() {
    /*para mudar a cor do background para verde em java*/
    let botaoJava = document.getElementById("java");
    botaoJava.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção c#*/
    let botaoC = document.getElementById("c#")
    botaoC.disabled = true;

    todasAsTecnologias.push(" com desenvolvimento em Java");

    escolheEstrategia();
}

/*terceira camada da árvore: escolher entre especialização e fullstack*/
function escolheEstrategia() {
    /*mostrar mensagem de escolha entre especialização e fullstack*/
    let estrategia = document.getElementById("estrategia");
    estrategia.style.display = 'block';
    
    /*mostrar botoes de especialização e fullstack*/
    let botaoEspecializacao = document.getElementById("especializacao");
    botaoEspecializacao.style.display = 'inline';
    let botaoFullstack = document.getElementById("fullstack");
    botaoFullstack.style.display = 'inline';
}

function escolheEspecializacao() {
    /*para mudar a cor do background para verde em especialização*/
    let botaoEspecializacao = document.getElementById("especializacao");
    botaoEspecializacao.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção c#*/
    let botaoFullstack = document.getElementById("fullstack")
    botaoFullstack.disabled = true;

    todasAsTecnologias.push(" e caminho de Especialização. ");

    imprimirTrilha();
}

function escolheFullstack() {
    /*para mudar a cor do background para verde em especialização*/
    let botaoFullstack = document.getElementById("fullstack");
    botaoFullstack.style.backgroundColor = 'orange';
    
    /*para desabilitar a opção c#*/
    let botaoEspecializacao = document.getElementById("especializacao")
    botaoEspecializacao.disabled = true;

    todasAsTecnologias.push(" e formação FullStack. ");

    imprimirTrilha();
}

function imprimirTrilha() {
    alert(todasAsTecnologias);
}
