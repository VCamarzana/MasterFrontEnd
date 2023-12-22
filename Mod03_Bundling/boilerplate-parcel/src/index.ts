import "./styles.scss";
import logoImg from "./content/logoPerfil.jpg";

const greet: string = "Hello, World!";
const logo = document.createElement("img");
logo.src = logoImg;
logo.alt = "logo Vero";

document.getElementById("img-container").appendChild(logo);

const secondaryText = document.createElement("div");
secondaryText.classList.add("secondary-text");
secondaryText.innerHTML = `The most popular programming string is "${greet}"`;

document.body.appendChild(secondaryText);

console.log(greet);
