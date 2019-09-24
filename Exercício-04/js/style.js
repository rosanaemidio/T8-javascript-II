let pinguim = {
    "nome":"Sam",
    "idade": 16,
    "origem":"Antartida"
}

pinguim.andar = function(){
    (console.log("andou"));
}
pinguim.podeVoar = false;

pinguim.voar = function(){
    
        if (pinguim.podeVoar) {
            console.log('Voou')
        }
        else {
            console.log ('Pinguim ainda não voa ')
        }
        
        
    
}