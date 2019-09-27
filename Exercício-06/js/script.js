// Eu tenho que pegar as informações recebidas no input, e colocar elas embaixo, adicionando um evento que ao clicar no criar transação mande as informações pra parte das informações.

const formulario= document.querySelector(".transacao__form")
const tabela = document.querySelector (".extrato__table")


formulario.addEventListener("submit", function(evento){
   evento.preventDefault(); //para não recarregar a página.

   let inputNome = document.getElementById("transacaoInputNome");
   let valorInputNome = inputNome.value;

   let inputPreco = document.getElementById("transacaoInputValor");
   let valorInputPreco = inputPreco.value;
   
   let inputData = document.getElementById("transacaoInputData");
   let valorInputData = inputData.value;

    const novaLinha = document.createElement("tr");
    tabela.appendChild(novaLinha);

    const novoNome = document.createElement("td");
    novaLinha.appendChild(novoNome);
    novoNome.textContent = valorInputNome;

    const novoPreco = document.createElement("td");
    novaLinha.appendChild(novoPreco);
    novoPreco.textContent = valorInputPreco;

    const novaData = document.createElement ("td");
    novaLinha.appendChild(novaData);
    novaData.textContent = valorInputData;

});

