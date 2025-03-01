const userNumber = parseInt(prompt('inserisci un numero'));
const validNumber = !isNaN(userNumber);
console.log(userNumber)
const userGuess = (prompt('inserisci la parola "pari" oppure "dispari" '));
console.log(userGuess)


function cpuNumber(userNumber) {
    let computerNumber = '';
    let cpuNumber = Math.round(Math.random() * 4) + 1; {
        computerNumber = computerNumber + cpuNumber
    }
    return cpuNumber
}
console.log(computerNumber)