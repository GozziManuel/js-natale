let pesiBonus = [2, 5, 1, 1, 7, 3, 12, 6, 9, 3];
console.table(pesiBonus);
let somma = 0;
let conteggio = 0;
let numeroDaCercareLeggero = 1;
const sceltaPesi = prompt(
  "Scegli il peso dei regali tra: leggero, medio o pesante."
);
console.log(sceltaPesi);

if (sceltaPesi === "leggero") {
  for (let i = 0; i < pesiBonus.length; i++) {
    if (pesiBonus[i] == 1) {
      somma += pesiBonus[i];
    }
  }

  for (let i = 0; i < pesiBonus.length; i++) {
    if (numeroDaCercareLeggero === pesiBonus[i]) conteggio++;
    {
    }
  }
  console.log(conteggio);
  alert(`i regali leggeri pesano ${somma} in totale e sono ${conteggio} `);
  console.log(somma);
}

if (sceltaPesi === "medio") {
  for (let i = 0; i < pesiBonus.length; i++) {
    if (pesiBonus[i] > 1 && pesiBonus[i] < 12) somma += pesiBonus[i];
  }

  for (let i = 0; i < pesiBonus.length; i++) {
    let numeroDaCercareMedio = pesiBonus[i];
    if (numeroDaCercareMedio > 1 && numeroDaCercareMedio < 12) conteggio++;
    {
    }
  }
  console.log(conteggio);
  alert(`i regali leggeri pesano ${somma} in totale e sono ${conteggio} `);
  console.log(somma);
}
if (sceltaPesi === "pesante") {
  for (let i = 0; i < pesiBonus.length; i++) {
    if (pesiBonus[i] == 12) {
      somma += pesiBonus[i];
    }
  }

  for (let i = 0; i < pesiBonus.length; i++) {
    let numeroDaCercarePesante = pesiBonus[i];
    if (numeroDaCercarePesante == 12) conteggio++;
    {
    }
  }
  console.log(conteggio);
  alert(`i regali leggeri pesano ${somma} in totale e sono ${conteggio} `);
  console.log(somma);
} else if (
  sceltaPesi !== "leggero" &&
  sceltaPesi !== "medio" &&
  sceltaPesi !== "pesante"
) {
  alert("metti un input valido tra leggero, medio e pesante.");
}
