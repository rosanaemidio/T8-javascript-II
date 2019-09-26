const livros = {
    1: {
        "titulo": "Java Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
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
    
    let nomeLivro = document.createElement("h2");
    lista.appendChild(nomeLivro);
    nomeLivro.textContent= livros["propriedade"]["titulo"];
    let autor = document.createElement("p");
    lista.appendChild(autor);
    autor.
    textContent = livros["propriedade"]["quemEscreveu"];
    let baixarLivro =document.createElement("a");
    lista.appendChild(baixarLivro);
    baixarLivro.textContent= "Link ";
    baixarLivro.setAttribute("href" , ["link"])
    baixarLivro.setAttribute("target", "_blank")
}
    
    /*livros[2];
    let nomeLivro2 = document.createElement("h2");
    lista.appendChild(nomeLivro2);
    nomeLivro2.textContent= livros["2"]["titulo"];
    let autor2 = document.createElement("p");
    lista.appendChild(autor2);
    autor.
    textContent = livros["2"]["quemEscreveu"];
    let link2 =document.createElement("a");
    lista.appendChild(link2);
    link2.textContent = "Link para baixar";
    link2.setAttribute("href" , "https://github.com/cezaraugusto/You-Dont-Know-JS")
    link2.setAttribute("target", "_blank");
    
    let nomeLivro3 = document.createElement("h2");
    lista.appendChild(nomeLivro3);
    nomeLivro3.textContent= livros["3"]["titulo"];
    let autor3 = document.createElement("p");
    lista.appendChild(autor3);
    autor3.
    textContent = livros["3"]["quemEscreveu"];
    let link3 =document.createElement("a");
    lista.appendChild(link2);
    link3.textContent= "Link ";
    link3.setAttribute("href" , "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf")
    link3.setAttribute("target", "_blank");

// }