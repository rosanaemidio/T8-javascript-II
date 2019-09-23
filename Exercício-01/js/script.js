
const alunas = ["Raquel Pereira","Talita Barbosa", "Lia Lobo", "Daiana Moraes", "Angelica Garcia", "Simara Conceição", "Simone Santos",
"Monique Almeida ", "Priscilla Alves"];

const lista = document.getElementById("lista-alunas"); // Pra não que o pc leia o mesmo elemento variás x consumindo muita memória coloco como global.
                                                        //Pq aí, ele vai pegar as propriedades abaixo.

for (let i=0; i < alunas.length; i++){
    let item= document.createElement("li"); //Tem que criar uma "let" pra guardar o que eu criei("li"); Ele vai criar a quantidade de elementos que foi determinado no For.
    item.textContent = alunas [i];           //O textContent é uma propriedade e por isso vai receeber um valor. Por isso recebe o sinal de igual. 

    lista.appendChild(item);    //O appendChild inclui o "item" (que é o filho) no "lista" (que é o pai). appendChild significa "acrescentar filho"

}


/*
Outra forma de laço; o "forEach" é um laço para Array; forEach significa para cada.

 const lista = document.getElementById("lista-alunas"); << é a div pai

Em todo forEach todo parâmetro "al" é cada item da lista. Este método é feito quando a função for CALLBACK

alunas.forEach(function(al){ =>>Função callback é uma função sendo parâmetro de outra função;
    let item = document.createElement("li");

    item.textContent = alunas;

    lista.appendChild(item);
})*/

// Adicionar um Evento

let soma = 0;

const meuTitulo = document.querySelector(".titulo");
//Ele espera receber dois parâmetros. O primeiro é o tipo do evento, o segundo é a função que você quer exeecutar.
meuTitulo.addEventListener("click",function logar(){ //Se tiver já definido a função  é só chamar ou posso criar no parâmetro, como eu vou executar um CALLBACK preciso criar outra função dentro.
   // meuTitulo.style.color = "red"  =>> a propriedade "style" é usada pra acrescentar estilo. Esta forma é uma forma de usar pra acrescentar uma alteração apenas.
  meuTitulo.classList.add("vermelha") //O "classList" seria uma boa prática, pois posso criar uma classe no CSS e adicionar várias modificações quando o evento acontecer.
}); 
                                                
