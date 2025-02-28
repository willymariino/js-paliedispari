const normalWord = (prompt('inserisci una parola'))

function reverseWord(normalWord) {
    let newstring = '';

    for (let i = normalWord.lenght - 1; i >= 0; i--) {
        newstring = newstring + normalWord[i]
    }

    return newstring

}
let newstring = normalWord
console.log(newstring)