
const user = prompt("inserisci il tuo nome", "Gabriel");
document.getElementById("benvenuto").innerHTML = `Ciao ${user}`

const chilometri = parseInt(prompt("Inserisci numero di chilometri da percorrere", "150"));
const eta = prompt("Inserisci la tua età?", "17")

let prezzo = (chilometri * 0.21)
let costo;



if (eta < 18) {
    costo = prezzo - (20/100 * prezzo);
    let trainTicket = costo.toFixed(2);
    document.getElementById("biglietto").innerHTML = "il prezzo del biglietto è di " + trainTicket + "€"
} else if (eta > 65) {
    costo = prezzo - (40/100 * prezzo);
    let trainTicket = costo.toFixed(2);
    document.getElementById("biglietto").innerHTML = "il prezzo del biglietto è di " + trainTicket + "€"
} else (costo = prezzo); {
    let trainTicket = costo.toFixed(2);
    document.getElementById("biglietto").innerHTML = "il prezzo del biglietto è di " + trainTicket + "€"
}