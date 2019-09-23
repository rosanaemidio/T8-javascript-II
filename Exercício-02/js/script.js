/* Exercício 2
Preciso fazer o elemento desaparecer ao clicar.
Posso usar o getElementsByClassName() e o querySelectorAll() p/ selecionar todos que quero modificar.*/


const catItem = document.querySelectorAll(".item__imagem");
//Precisa criar um laço
catItem.forEach(function(gato){ 
    gato.addEventListener("click", function(evento){ //no addEventListener devo começar chamando o parâmetro do Array e sempre vai receber um "everto" como parâmetro.
        evento.target.classList.add("invisivel"); //Target é o alvo que causa o evento.

    })
    
})


//for (let i=0; i < catItem.length; i++)