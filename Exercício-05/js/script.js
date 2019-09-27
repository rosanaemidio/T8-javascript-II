const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const lista = document.getElementById("lista-do-catalogo");


for(let propriedade in livros){
    const meuLivro = document.createElement("li");//Ela criou esta variável para criar uma lista
    lista.appendChild(meuLivro);
    meuLivro.classList.add("livro");

    const nomeLivro = document.createElement("h2");
    meuLivro.appendChild(nomeLivro);
    nomeLivro.textContent= livros[propriedade]["titulo"]; // não coloco o propriedade entre aspas pq ele é uma const decl.
    nomeLivro.classList.add("livro__titulo") ;
   

    const autor = document.createElement("p");
    meuLivro.appendChild(autor);
    autor.textContent = livros[propriedade]["quemEscreveu"];
    autor.classList.add("livro__autoria")

    const baixarLivro = document.createElement("a");
    meuLivro.appendChild(baixarLivro);
    baixarLivro.textContent = "Leia esta obra ";
    baixarLivro.setAttribute("href" , livros[propriedade]["link"]);
    baixarLivro.setAttribute("target", "_blank");
    baixarLivro.classList.add("livro__link");
    
    const button = document.createElement("button");
    meuLivro.appendChild(button);
    button.textContent = "Marcar como lido"
    meuLivro.setAttribute("target", "button");
    button.classList.add("botao-lido"); 
    // button.addEventListener("click", function(){ // Adiciono a orelhinha onde quero que escute o acontecimento
    //         nomeLivro.classList.add("livro__titulo--lido") // Adicionei o evento aonde quero que aconteça.

    // })
    button.addEventListener("click", function(){
        //Criando um Toggle
        //Verifica se o titulo já está marcado comop lido
        if(nomeLivro.classList.contains("livro__titulo--lido")) { //Se isto for verdadeiro eu executo este bloco;
           //Marco o título como não lido
            nomeLivro.classList.remove("livro__titulo--lido");
            //Volto o botão para verde e o texto inicial
            button.textContent = "Marcar como lido";// 
            button.classList.remove("botton-desfazer");
           
        } else{
            //Marca o livro como lido - tick
            nomeLivro.classList.add("livro__titulo--lido");
            //Deixa o botão vermelho e modifica o texto inicial
            button.textContent = "Marcar como não lido"; 
            button.classList.add("botton-desfazer"); 
        }
    });

    // const button2= document.createElement("button");
    // meuLivro.appendChild(button2);
    // button2.textContent = "Desfazer"
    // meuLivro.setAttribute("target", "button");
    // button2.classList.add("botao-desfazer");
    // button2.addEventListener("click", function(){
    //         nomeLivro.classList.remove("livro__titulo--lido")
        
    // })
    

}





    
    /*livros[2];
    const nomeLivro2 = document.createElement("h2");
    lista.appendChild(nomeLivro2);
    nomeLivro2.textContent= livros["2"]["titulo"];
    const autor2 = document.createElement("p");
    lista.appendChild(autor2);
    autor.
    textContent = livros["2"]["quemEscreveu"];
    const link2 =document.createElement("a");
    lista.appendChild(link2);
    link2.textContent = "Link para baixar";
    link2.setAttribute("href" , "https://github.com/cezaraugusto/You-Dont-Know-JS")
    link2.setAttribute("target", "_blank");
    
    const nomeLivro3 = document.createElement("h2");
    lista.appendChild(nomeLivro3);
    nomeLivro3.textContent= livros["3"]["titulo"];
    const autor3 = document.createElement("p");
    lista.appendChild(autor3);
    autor3.
    textContent = livros["3"]["quemEscreveu"];
    const link3 =document.createElement("a");
    lista.appendChild(link2);
    link3.textContent= "Link ";
    link3.setAttribute("href" , "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf")
link3.setAttribute("target", "_blank")*/
