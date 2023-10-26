
const chilometri = parseInt (prompt("Inserisci numero di chilometri da percorrere", "150"));
const eta = prompt("Inserisci la tua età?", "17")

let prezzo = (chilometri * 0,21)
let costo = costo.toFixed(2);

if (eta <= 17) {
    costo = (prezzo - 20%);
    document.getElementById("prezzo").innerHTML = "il prezzo del biglietto è di " + costo + "€"
} else if (eta >= 65) {
    costo = (prezzo - 40%);
    document.getElementById("prezzo").innerHTML = "il prezzo del biglietto è di " + costo + "€"
} else costo = prezzo
document.getElementById("prezzo").innerHTML = "il prezzo del biglietto è di " + costo + "€"



