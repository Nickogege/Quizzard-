const enunciado = document.getElementById("enunciado")
const btnAlternativa1= document.getElementById("btnResposta1")
const btnAlternativa2= document.getElementById("btnResposta2")
const btnAlternativa3= document.getElementById("btnResposta3")
const btnAlternativa4= document.getElementById("btnResposta4")

const perguntas = [{
    pergunta : "Quem é o mais cuecudo da sala?",
    alternativas : ["Kayo", "Guilherme Takao", "Vinicius Guilherme", "Pedro"],
    resposta : 0
},
{
    pergunta : "Qual é a cor da nuvem?",
    alternativas : ["verde", "azul", "branca", "vermelha"],
    resposta : 2
},
{
    pergunta : "Qual é a cor do dente?",
    alternativas : ["amarelo", "branco", "preto", "vermelho"],
    resposta : 1
},
{
    pergunta : "Qual é o único mamífero que voa?",
    alternativas : ["Morcego", "Pardal", "Qualquer ave de rapina", "Pombo"],
    resposta : 0
},
{
    pergunta : "O que a vaca bebe?",
    alternativas : ["Leite", "Água", "Suco", "Café"],
    resposta : 1
},
{
    pergunta : "Quem é o mais narigudo da sala?",
    alternativas : ["Kayo", "Samuel Basso", "Vinicius Guilherme", "Samuel Campos"],
    resposta : 1
},
{
    pergunta : "Se pato fica sem a pata, ele fica manco ou viuvo?",
    alternativas : ["Manco", "Viuvo", "Vira cantor de sertanejo", "Começa a escutar Nirvana"],
    resposta: 3
}]

let atualPergunta = 0

function atualizarPerguntas (){
    enunciado.textContent = perguntas[atualPergunta].pergunta
    btnAlternativa1.textContent = perguntas[atualPergunta].alternativas[0]
    btnAlternativa2.textContent = perguntas[atualPergunta].alternativas[1]
    btnAlternativa3.textContent = perguntas[atualPergunta].alternativas[2]
    btnAlternativa4.textContent = perguntas[atualPergunta].alternativas[3]
}

function verificarResposta(indice){
    if(indice === perguntas[atualPergunta].resposta){
        alert("Resposta correta!") 
    } else {
        alert("Resposta incorreta!")      
    }

    atualPergunta++

    if(atualPergunta < perguntas.length){
        atualizarPerguntas()
    } else {
        alert("Parabéns! Você completou o quiz!")
        window.location.href = "home.html"
    }
}

btnAlternativa1.addEventListener("click", function(){verificarResposta(0)})
btnAlternativa2.addEventListener("click", function(){verificarResposta(1)})
btnAlternativa3.addEventListener("click", function(){verificarResposta(2)})
btnAlternativa4.addEventListener("click", function(){verificarResposta(3)})

atualizarPerguntas()