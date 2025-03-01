const userNumber = parseInt(prompt('inserisci un numero'));
const validNumber = !isNaN(userNumber);
console.log(userNumber)
const userGuess = (prompt('inserisci la parola "pari" oppure "dispari" '));
console.log("l'utente ha scelto - " + userGuess)

let num1 = Math.round(Math.random() * 4) + 1; {
    console.log(num1) // è uguale all'altro algoritmo, non so perchè questo funziona e stampa in console, mentre l'altro non stampava.
}

let sum = userNumber + num1; { // prima avevo messo userNumber + num1 tra parentesi, rimane il dubbio su quando ci vogliono le parentesi e quando no
    console.log(sum)
}

if (sum % 2 !== 0) {
    console.log("dispari")
}

else {
    console.log("pari")
}
