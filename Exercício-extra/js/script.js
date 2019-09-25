const formulario = document.getElementById("formulario-de-comentarios") //Pegue o elemento com esse nome, que está no parâmetro.
const comentario = document.getElementById("todos-os-comentarios");

const erro = document.querySelector(".meu-erro")

formulario.addEventListener("submit", function(evento){ //Toda vez que a f for callback,por padrão o parâmetro sempre será um evento, mas posso usar qualquer nome.
    evento.preventDefault();//altera o padrão de recarregar a pag, que é uma carac de forms.
    let inputUsuario = document.querySelector (".input-de-texto");
    
    let mensagem = inputUsuario.value;


    if(inputUsuario.value.trim() === "" ){
        erro.textContent = "Escreva uma mensagem válida"
    }
    else{
        erro.textContent = "";
        let msgUsuario = document.createElement ("p"); //>>> Quando vou criar um elemento, eu tenho que colocar como parâmetro uma tag do html relacionado com o que eu vou fazer nesta função.
    comentario.appendChild(msgUsuario);
    msgUsuario.textContent = mensagem;

    msgUsuario.classList.add("comentario");
    formulario.reset();
    //OU inputUsuario.value = " ";
    }
});

/* como eu fiz
  if(inputUsuario.value.trim() === "" ){
        inputUsuario.classList.add("erro");
        const meuerro = document.createElement("p");
        formulario.appendChild(meuerro);
        meuerro.textContent = "Digite um comentário válido!";*/ 
 //if else(inputUsuario.value.trim <) >>> Arummar uma forma de se o usuario digitar um texto com menos de 20caracteres ele vai receber uma mensagem de erro.