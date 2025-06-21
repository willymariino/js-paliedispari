# pari e dispari
- utente sceglie un numero 
- l'utente cerca di indovinare se il risultato sarà pari o dispari inserendo il prompt "pari" o "dispari"
- computer genera un numero
- la somma dei due numeri viene calcolata
- viene identificato se il numero è pari o dispari
    - se il numero generato è pari, il computer stamperà la parola "pari"
    - se il numero generato è dispari, il computer stamperà la parola "dispari"
    - verificare che il prompt dell'utente sia uguale al risultato stampato dal computer
        - SE il prompt dell'utente è uguale a quello generato dal computer:
            - vince l'utente
        - SE è diverso. vince il computer 
 - Stampare il risultato in console su chi dei due ha vinto 
- dichiariamo chi ha vinto


# parole palindrome
- chiedere all'utente una parola tramite prompt
- invertire la parola inserita (ad esempio usando un ciclo che parte dalla fine della parola e aggiunge ogni lettera a una nuova stringa)
- confrontare la parola originale con quella invertita
    - se sono uguali, la parola è palindroma
    - se sono diverse, la parola non è palindroma
- stampare in console la parola invertita e il risultato del controllo (true/false)

## Spiegazione dettagliata
1. L'utente inserisce una parola tramite prompt.
2. La parola viene invertita carattere per carattere, partendo dall'ultimo fino al primo.
3. Si confronta la parola originale con quella invertita:
   - Se coincidono, la parola è palindroma (es: "anna", "otto").
   - Se non coincidono, non è palindroma (es: "cane").
4. Il programma stampa la parola invertita e se la parola è palindroma o meno.

---

**Nota:**
Questi punti rappresentano i ragionamenti e lo pseudo-codice che ho seguito per arrivare alle soluzioni dei due esercizi (pari e dispari, parole palindrome). Sono utili per comprendere la logica e la sequenza dei passaggi prima di scrivere il codice vero e proprio.