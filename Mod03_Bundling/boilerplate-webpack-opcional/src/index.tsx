import "./styles.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import logoImg from "./content/logoPerfil.jpg";

console.log(`Api base: ${process.env.API_BASE}`);

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hello from React DOM</h1>
    <img src={logoImg} style={{ width: 150 }} />
    <p className="text">
      Diseñadora Gráfica
      <br />
      aprendiendo Front-End
    </p>
  </div>,
);
