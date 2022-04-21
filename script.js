// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range: 
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// **Consigli del giorno:** :party_wizard:
// **** Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
// **** Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

const container = document.querySelector(".container");

init();

// funzione di inizializzazione
function init(){

  for (let i = 0; i < 100; i++) {
    
    const sq = creaQuadretto(container);
  
  }
}

// funzione crea quadretti
function creaQuadretto(target) {
  const sq= document.createElement("div");
  sq.className = "square";

  target.append(sq);
  return sq    

  
}

// funzione crea numeri
function creaNumeri(target){
  
  const spanNum= document.createElement("span");
  spanNum.className = "num_span";
  let numeroQuad = document.querySelector(".num_span")
  
  target.append(spanNum);
  return spanNum;


}


  