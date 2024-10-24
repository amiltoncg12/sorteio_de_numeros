function sortear() {
    // armazendo os numero em variavéis
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // array para armazena numeros aleatorios
    let sorteados = [];
    let numero;

    if (quantidade > de && quantidade > ate) {
        alert("Campo Do número deve ser inferior ao campo Até o número. Verifique!");
    } else {

        // loop para gerar numeros aleatorios
        for (let i = 0; i < quantidade; i++) {

            numero = numeroAleatorio(de, ate);

            // loop para não escolher numeros repetidos
            while (sorteados.includes(numero)) {
                numero = numeroAleatorio(de, ate);
            }

            sorteados.push(numero);

        }

    }

    let msg = document.getElementById("resultado");
    msg.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarBotao();
}

// função para cirar numeros aleatórios 
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função para alterar o estatus do botão reiniciar 
function alterarBotao() {

    let reiniciar = document.getElementById("btn-reiniciar");

    if (reiniciar.classList.contains("container__botao-desabilitado")) {
        // removendo classe de tag
        reiniciar.classList.remove("container__botao-desabilitado");
        //adicionando class em tag
        reiniciar.classList.add("container__botao");

    } else {

        reiniciar.classList.add("container__botao-desabilitado");
        reiniciar.classList.remove("container__botao");
    }
}


function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';

    let msg = document.getElementById("resultado")
    msg.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

    alterarBotao();
}
