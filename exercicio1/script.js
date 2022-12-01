
const numeroDivisivel = Number(prompt("Digite um número"))
if(numeroDivisivel % 2 === 0){
    console.log("o numero é divisivel por 2")
    if(numeroDivisivel % 3 === 0){
        console.log("o numero é divisivel por 3")

    }
}

//quando digita um numero que não é divisivel por 2, o codigo não continua a leitura do segundo if

if(numeroDivisivel % 2 === 0 && numeroDivisivel % 3 === 0){
    console.log("o numero é divisivel por 2 e por 3")
}

if(numeroDivisivel % 2 === 0 || numeroDivisivel % 3 === 0){
    console.log("o numero é divisivel por 2 ou por 3")
}