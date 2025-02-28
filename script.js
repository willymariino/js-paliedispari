const normalWord = (prompt('inserisci una parola'))

function reverseWord(normalWord) {
    let newstring = '';

    for (let i = normalWord.length - 1; i >= 0; i--) {
        newstring = newstring + normalWord[i]
    }

    return newstring

}
let newstring = reverseWord(normalWord)
console.log(newstring)

function isWordaPalindrome(newstring) {
    if (normalWord === newstring) {
        return true;
    }

    else {
        return false;
    }


}
let result = isWordaPalindrome(newstring);
console.log(result);
