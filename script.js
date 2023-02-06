// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle
// - con difficoltà 2 => 81 caselle
// - con difficoltà 3 => 49 caselle

/* ON LOAD */
const gridEl = document.getElementById("grid");
console.log(gridEl);

const playButtonEl = document.getElementById("play-button");

const square = 100;

generateGrid(gridEl, square);

/* FUNCTION */

/**
 * generatore di elementi della griglia
 * @param {string} grid dove inserire le card
 * @param {int} dimension quante card creare
 */
function generateGrid(grid, squareTotal) {

    for (let i = 0; i < squareTotal; i++) {

        const cardEl = document.createElement("div");
        cardEl.classList.add("grid-element");
        cardEl.classList.add("col");
        cardEl.classList.add("col-auto");
        cardEl.classList.add("p-3");
        cardEl.innerHTML = i + 1;
        gridEl.append(cardEl);

        console.log(cardEl);

        cardEl.addEventListener(
            "click", 
            function () {

            this.classList.toggle("active");
        
        });
    }
}