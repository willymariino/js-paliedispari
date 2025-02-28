const normalWord = (prompt('inserisci una parola'))

function reverseWord(normalWord) {
    let newstring = '';

    for (let i = 0; normalWord - 1; i--) {
        newstring = newstring + normalWord[i]
    }

    return newstring

}
let newstring = reverseWord
console.log(reverseWord)