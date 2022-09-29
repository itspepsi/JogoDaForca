var palavras = ["FRONTEND","DEVOPS","UXDESIGN","MOBILE","INOVACAO","GESTAO","HTML","CSS","JAVA","JAVASCRIPT"];

function palavraAleatoria() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase()
}


const letrasErradas = []
const letrasCorretas = [];