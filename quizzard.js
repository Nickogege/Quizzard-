const enunciado = document.getElementById("enunciado");
const btnResposta1 = document.getElementById("btnResposta1");
const btnResposta2 = document.getElementById("btnResposta2");
const btnResposta3 = document.getElementById("btnResposta3");
const btnResposta4 = document.getElementById("btnResposta4");

perguntas = [
    {
    pergunta: "Quem é o mais cuecudo da sala?",
    alternativas: ["Kayo", "Guilherme Takao", "Vinicius Guilherme", "Pedro"],
    resposta: 1
},
     {
        pergunta: "Qual é o maior orgao do corpo humano?",
        alternativas: ["Coração", "Fígado", "Pele", "Pinto"],
        resposta: 2
    },
    {
        pergunta: "Quem da sala tem o maior nariz?",
        alternativas: ["Arthur", "Massaki", "Vinicius Guilherme", "Pedro"],
        resposta: 0
    }
]

enunciado.textContent = perguntas[0].pergunta;
btnResposta1.textContent = perguntas[0].alternativas[0];