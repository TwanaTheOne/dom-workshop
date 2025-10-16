//navigater : Karam och Zaida , 
//driver : Twana


const rubrik = document.createElement("h1");
rubrik.textContent = "Min rubrik för dagen";
rubrik.style.color = "#1e3a8a";


const paragraf = document.createElement("p");
paragraf.textContent = "Beskriv vädret idag";
paragraf.style.color = "#fef3c7";

const div = document.createElement("Det här är en färgad ruta");



const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

document.body.appendChild(rubrik);