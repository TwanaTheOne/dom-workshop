// navigator: zaida , twana
// driver: karam

// Hämta noder
const rubrik = document.getElementById("rubrik");
const container = document.getElementById("text-container");


const btnBg = document.getElementById("btn-bg");
const btnAdd = document.getElementById("btn-add");
const btnRemove = document.getElementById("btn-remove");
const btnNames = document.getElementById("btn-names");

// 1) “Byt bakgrundsfärg” → bakgrund #e0f2fe
btnBg.addEventListener("click", () => {
  document.body.style.backgroundColor = "#e0f2fe";
});

// 2) “Lägg till stycke” → nytt <p> med text om hur många timmar du sov i natt
btnAdd.addEventListener("click", () => {
  // Fråga användaren (frivilligt), annars sätt en neutral text
  const timmar = window.prompt("Hur många timmar sov du i natt?", "7");
  const p = document.createElement("p");
  p.textContent = `Jag sov ${timmar ?? "?"} timmar i natt.`;
  container.appendChild(p);
});

// 3) “Ta bort senaste stycke” → tar bort sista <p>
btnRemove.addEventListener("click", () => {
  const sistaStycke = container.querySelector("p:last-of-type");
  if (sistaStycke) {
    sistaStycke.remove();
  }
});

// 4) “Era namn på rad, t.ex. ZaidaTwanaKaram” → ändrar rubrikens text till era namn
btnNames.addEventListener("click", () => {
  // Byt gärna texten i HTML-knappen och här till era riktiga namn om ni vill
  rubrik.textContent = "ZaidaTwanaKaram";
});
