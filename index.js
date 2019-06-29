
var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
function cifrar() {
    var palavra = (document.getElementById('palavra').value).toUpperCase();
    var chave = (document.getElementById('chavecifra').value).toUpperCase();
    var vetorPalavra = []
    var vetorChave = []
    var vetorFinal = []

    for (let i = 0; i < palavra.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if(palavra[i] == alfabeto[j]){
                vetorPalavra.push(j)
            }
            
        }   
    }

    for (let i = 0; i < chave.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if(chave[i] == alfabeto[j]){
                vetorChave.push(j)
            }
            
        }   
    }

    console.log(vetorPalavra);
    console.log(vetorChave);  
  
    var anchor = 0;
    for (let i = 0; i < vetorPalavra.length; i++) {
        if(anchor == vetorChave.length){
            anchor = 0
            vetorFinal.push(vetorPalavra[i] + vetorChave[anchor])
        }else{
            vetorFinal.push(vetorPalavra[i] + vetorChave[anchor])
        }
    }

    
    var textoCifrado = ""
    for (let i = 0; i < vetorFinal.length; i++) {
        if(vetorFinal[i] > alfabeto.length){
            textoCifrado += alfabeto[vetorFinal[i] - alfabeto.length]
        }else{
            textoCifrado += alfabeto[vetorFinal[i]]
        }
        
    }

    console.log(textoCifrado);
    document.getElementById("criptografia").value = textoCifrado;
        
}

function decifrar() {
    var palavra = (document.getElementById('palavra').value).toUpperCase();
    var chave = (document.getElementById('chavecifra').value).toUpperCase();
    var vetorPalavra = []
    var vetorChave = []
    var vetorFinal = []

    for (let i = 0; i < palavra.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if(palavra[i] == alfabeto[j]){
                vetorPalavra.push(j)
            }
            
        }   
    }

    for (let i = 0; i < chave.length; i++) {
        for (let j = 0; j < alfabeto.length; j++) {
            if(chave[i] == alfabeto[j]){
                vetorChave.push(j)
            }
            
        }   
    }

    console.log(vetorPalavra);
    console.log(vetorChave);  
  
    var anchor = 0;
    for (let i = 0; i < vetorPalavra.length; i++) {
        if(anchor == vetorChave.length){
            anchor = 0
            vetorFinal.push(vetorPalavra[i] - vetorChave[anchor])
        }else{
            vetorFinal.push(vetorPalavra[i] - vetorChave[anchor])
        }
    }

    
    var textoCifrado = ""
    for (let i = 0; i < vetorFinal.length; i++) {
        if(vetorFinal[i] > alfabeto.length){
            textoCifrado += alfabeto[vetorFinal[i] - alfabeto.length]
        }else{
            textoCifrado += alfabeto[vetorFinal[i]]
        }
        
    }

    console.log(textoCifrado);
    document.getElementById("descriptografia").value = textoCifrado;
        
}