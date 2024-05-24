// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

let users = []
users.push(marco, paul, amy) //Creo un array di utenti chiamato users


for (let i = 0; i < users.length; i++) {//Stampo se l'utente è un ambassador o no
  if (users[i].isAmbassador === true) {
    console.log(`${users[i].name} ${users[i].lastName} è un ambassador`)
  } else {
    console.log(`${users[i].name} ${users[i].lastName} non è un ambassador`)
  }
}

let ambassadors = [] //Creo un array vuoto per gli ambassador
for (let i = 0; i < users.length; i++) { //Inserisco gli ambassador nell'array
  if (users[i].isAmbassador === true) {
    ambassadors.push(users[i])
  }
}
console.log(ambassadors) //Stampo l'array degli ambassador




const prices = [50, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = paul //cambia il valore qui per provare se il tuo algoritmo funziona!

/**
 * // 1. Se l'utente è un ambassador, applica uno sconto del 30%
 * // 2. Se il costo del carrello è maggiore di 100, la spedizione è gratis
 * // 3. Altrimenti, aggiungi il costo della spedizione
 * // 4. Restituisci il costo totale del carrello
 */

let total = 0 //Creo una variabile per il costo totale
let discount = 0 //Creo una variabile per lo sconto
const shipping = 50 //Creo una costante per il costo della spedizione

for (let i = 0; i < prices.length; i++) { //Calcolo il costo totale
  total += prices[i]
}

console.log(`Il costo totale ${utenteCheEffettuaLAcquisto.name} è di ${total} €`) //Stampo il costo totale del carrello

if (utenteCheEffettuaLAcquisto.isAmbassador === true) { //Se l'utente è un ambassador applico uno sconto del 30%
  discount = total * 0.3
  console.log(`Hai diritto ad uno sconto del 30%`)
} else {
  discount = 0
  console.log(`Non c'è sconto per te!`)
}

let totaleConSconto = total - discount //Calcolo il costo totale con lo sconto

if (totaleConSconto > 100) { //Se il costo del carrello è maggiore di 100 la spedizione è gratis
  console.log(`La spedizione è gratis! e il costo totale è di ${totaleConSconto} €`)
} else {
  totaleConSconto = totaleConSconto + shipping //Altrimenti aggiungo il costo della spedizione
  console.log(`La spedizione costa ${shipping} € e il costo totale è di ${totaleConSconto} €`)
}






