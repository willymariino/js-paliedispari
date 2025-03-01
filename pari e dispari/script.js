// input numero dell'utente
const userNumber = parseInt(prompt('inserisci un numero'));

// validazione dell'input dell'utente per il numero inserito
const validNumber = !isNaN(userNumber);
console.log(userNumber)

// input dell'utente se il risultato sarà pari o dispari
const userGuess = (prompt('inserisci la parola "pari" oppure "dispari" '));
console.log("l'utente ha scelto - " + userGuess)

// generazione random del numero del computer
let num1 = Math.round(Math.random() * 4) + 1; {
    console.log(num1) // è uguale all'altro algoritmo, non so perchè questo funziona e stampa in console, mentre l'altro non stampava.
}

// somma dei due numeri
let sum = userNumber + num1; { // prima avevo messo userNumber + num1 tra parentesi, rimane il dubbio su quando ci vogliono le parentesi e quando no
    console.log(sum)
}

// calcolo se il risultato è pari o dispari
if (sum % 2 !== 0) {
    console.log("dispari")
}

else {  // non capisco perchè se metto qualcos'altro rispetto a else da errore
    console.log("pari")
}
