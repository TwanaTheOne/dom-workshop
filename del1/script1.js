Driver: Twana
Navigators: Karam & Zaida


// Övning 1 – Skapa och ändra element

// Skapa elementen
const rubrik = document.createElement("h2");
rubrik.textContent = "Min rubrik för dagen";
rubrik.style.color = "#1e3a8a";

const paragraf = document.createElement("p");
paragraf.textContent = "Idag är vädret soligt och kallt.";
paragraf.style.color = "#fef3c7";

const ruta = document.createElement("div");
ruta.textContent = "Det här är en färgad ruta";
ruta.style.backgroundColor = "#10b981";
ruta.style.padding = "10px";
ruta.style.marginTop = "10px";

// Lägg till i dokumentet
document.body.appendChild(rubrik);
document.body.appendChild(paragraf);
document.body.appendChild(ruta);

// Ändra paragrafens text via JS
const idag = new Date().toLocaleDateString("sv-SE");
paragraf.textContent += ` — Dagens datum: ${idag}`;
