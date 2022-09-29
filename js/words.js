var palavras = ["FRONTEND","DEVOPS","UXDESIGN","MOBILE","INOVACAO","GESTAO","HTML","CSS","JAVA","JAVASCRIPT","ORACLE","ALURA"];

function palavraAleatoria() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase()
}


const letrasErradas = []
const letrasCorretas = [];