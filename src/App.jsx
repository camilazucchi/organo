import { useState } from "react";
import "./_normalize.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times] = useState([
    {
      id: uuidv4(),
      nome: "Mascot",
      corPrimaria: "#6a74fd",
      corSecundaria: "#d8d4ff",
    },
    {
      id: uuidv4(),
      nome: "A.D.M.I.N.",
      corPrimaria: "#39a091",
      corSecundaria: "#8bead9",
    },
    {
      id: uuidv4(),
      nome: "Mecha: PRIME",
      corPrimaria: "#002567",
      corSecundaria: "#1260ae",
    },
    {
      id: uuidv4(),
      nome: "LaserCorps",
      corPrimaria: "#0ed1de",
      corSecundaria: "#a5ffff",
    },
    {
      id: uuidv4(),
      nome: "Threat",
      corPrimaria: "#594baa",
      corSecundaria: "#a48ef6",
    },
    {
      id: uuidv4(),
      nome: "Supers",
      corPrimaria: "#2e5727",
      corSecundaria: "#88b47d",
    },
    {
      id: uuidv4(),
      nome: "Ox Force",
      corPrimaria: "#7b2c24",
      corSecundaria: "#c96f62",
    },
    {
      id: uuidv4(),
      nome: "Gadgeteen",
      corPrimaria: "#6c8fb0",
      corSecundaria: "#b5d8fc",
    },
    {
      id: uuidv4(),
      nome: "Forecaster",
      corPrimaria: "#dd2264",
      corSecundaria: "#ff96c1",
    },
    {
      id: uuidv4(),
      nome: "Star Guardian",
      corPrimaria: "#f38a9e",
      corSecundaria: "#fcd6e7",
    },
    {
      id: uuidv4(),
      nome: "Riftwalker",
      corPrimaria: "#240c38",
      corSecundaria: "#644779",
    },
    {
      id: uuidv4(),
      nome: "Infiniteam",
      corPrimaria: "#37485c",
      corSecundaria: "#798aa1",
    },
    {
      id: uuidv4(),
      nome: "Renegade",
      corPrimaria: "#002000",
      corSecundaria: "#085b38",
    },
    {
      id: uuidv4(),
      nome: "Spellslinger",
      corPrimaria: "#7a65cf",
      corSecundaria: "#e1c4ff",
    },
    {
      id: uuidv4(),
      nome: "Quickdraw",
      corPrimaria: "#fb4d1d",
      corSecundaria: "#ffb57a",
    },
    {
      id: uuidv4(),
      nome: "Ace",
      corPrimaria: "#9b4800",
      corSecundaria: "#ef8c19",
    },
    {
      id: uuidv4(),
      nome: "Defender",
      corPrimaria: "#07003a",
      corSecundaria: "#3b0d7b",
    },
    {
      id: uuidv4(),
      nome: "Brawler",
      corPrimaria: "#6a7470",
      corSecundaria: "#b0bbb7",
    },
    {
      id: uuidv4(),
      nome: "Sureshot",
      corPrimaria: "#00087f",
      corSecundaria: "#4142c9",
    },
    {
      id: uuidv4(),
      nome: "Underground",
      corPrimaria: "#420057",
      corSecundaria: "#8b259d",
    },
    {
      id: uuidv4(),
      nome: "Heart",
      corPrimaria: "#fb594b",
      corSecundaria: "#ffc0a7",
    },
    {
      id: uuidv4(),
      nome: "Duelist",
      corPrimaria: "#8c2d5f",
      corSecundaria: "#f38cbc",
    },
    {
      id: uuidv4(),
      nome: "Anima Squad",
      corPrimaria: "#bc2847",
      corSecundaria: "#ff7d87",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores((prevState) => [...prevState, colaborador]);
  };

  return (
    <div>
      <Banner />
      <Form
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
      />
      {times.map(({ time, nome, corPrimaria, corSecundaria, id }) => (
        <Time
          id={uuidv4}
          nome={nome}
          key={nome}
          time={time}
          corPrimaria={corPrimaria}
          corSecundaria={corSecundaria}
          colaboradores={colaboradores.filter(({ time }) => time === nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
