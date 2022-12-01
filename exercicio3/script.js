//código a ser reescrito

const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual sua idade?")

if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

//If Ternário

console.log(nome === "José" ? "Oi, Zé!" : "Olá, " + nome)

console.log(
	idade >= 18 
	? "pode tirar carteira de motorista!" 
	: "Ainda não pode tirar carteira de motorista"
)

