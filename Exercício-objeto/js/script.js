const objeto = {
    nome: "Rosana",
    profissao: "Desenvolvedora",
    idade: 26,
    signo: "Touro",
    ascendente: "Sagitario",
    bichinhos: "Ravena e Furiosa",
    
}

const objetoLink = {
    site: "https://www.winxclub.com/br",
    
}

const objetoImg ={
    foto: "https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif"
}

//fazer as propriedades aparecerem na pagina

const thisIsMe = document.getElementById("sou-a-mamis");

/*const eu = document.createElement("h2");
eu.textContent = objeto.nome;
thisIsMe.appendChild(eu);

const idade = document.createElement("h3");
idade.textContent = objeto.idade;
thisIsMe.appendChild(idade);


const trabalho = document.createElement("h4");
trabalho.textContent = objeto.profissao;
thisIsMe.appendChild(trabalho);

const curiosidades = document.createElement("p");
curiosidades.textContent = "Taurina com Ascendente em Sagitário.Ravena e Furiosa são os nomes das suas bebês de 4 patas.";
thisIsMe.appendChild(curiosidades);

const meuSite = document.createElement("a");
thisIsMe.appendChild(meuSite);
meuSite.textContent = "Acessar meu site";
meuSite.setAttribute("href", objeto.site);
meuSite.setAttribute("target", "_blank");

const ibagem = document.createElement("img");
thisIsMe.appendChild(ibagem);
ibagem.setAttribute("src", objeto.foto);*/

// maneira mais fácil
for(let propriedade in objeto){
    objeto[propriedade];
    let lula=document.createElement("p");
    thisIsMe.appendChild(lula);
    lula.textContent = objeto[propriedade];

}

//if

for(let propriedade in objetoLink){
    objetoLink[propriedade];
    let dilma= document.createElement("a");
    thisIsMe.appendChild(dilma);
    dilma.textContent = "Olha o meu site!"
    dilma.setAttribute("href", objetoLink[propriedade]);

}
//else if
for(let propriedade in objetoImg){
    objetoImg[propriedade];
    let haddad = document.createElement("img");
    thisIsMe.appendChild(haddad);
    haddad.setAttribute("src", objetoImg[propriedade])
}