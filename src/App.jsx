import { useState } from "react";
import "./_normalize.css";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import Footer from "./components/Footer";

function App() {
  const times = [
    {
      nome: "Mascot",
      corPrimaria: "#6a74fd",
      corSecundaria: "#d8d4ff",
    },
    {
      nome: "A.D.M.I.N.",
      corPrimaria: "#39a091",
      corSecundaria: "#8bead9",
    },
    {
      nome: "Mecha: PRIME",
      corPrimaria: "#002567",
      corSecundaria: "#1260ae",
    },
    {
      nome: "LaserCorps",
      corPrimaria: "#0ed1de",
      corSecundaria: "#a5ffff",
    },
    {
      nome: "Threat",
      corPrimaria: "#594baa",
      corSecundaria: "#a48ef6",
    },
    {
      nome: "Supers",
      corPrimaria: "#2e5727",
      corSecundaria: "#88b47d",
    },
    {
      nome: "Ox Force",
      corPrimaria: "#7b2c24",
      corSecundaria: "#c96f62",
    },
    {
      nome: "Gadgeteen",
      corPrimaria: "#6c8fb0",
      corSecundaria: "#b5d8fc",
    },
    {
      nome: "Forecaster",
      corPrimaria: "#dd2264",
      corSecundaria: "#ff96c1",
    },
    {
      nome: "Star Guardian",
      corPrimaria: "#f38a9e",
      corSecundaria: "#fcd6e7",
    },
    {
      nome: "Riftwalker",
      corPrimaria: "#240c38",
      corSecundaria: "#644779",
    },
    {
      nome: "Infiniteam",
      corPrimaria: "#37485c",
      corSecundaria: "#798aa1",
    },
    {
      nome: "Renegade",
      corPrimaria: "#002000",
      corSecundaria: "#085b38",
    },
    {
      nome: "Spellslinger",
      corPrimaria: "#7a65cf",
      corSecundaria: "#e1c4ff",
    },
    {
      nome: "Quickdraw",
      corPrimaria: "#fb4d1d",
      corSecundaria: "#ffb57a",
    },
    {
      nome: "Ace",
      corPrimaria: "#9b4800",
      corSecundaria: "#ef8c19",
    },
    {
      nome: "Defender",
      corPrimaria: "#07003a",
      corSecundaria: "#3b0d7b",
    },
    {
      nome: "Brawler",
      corPrimaria: "#6a7470",
      corSecundaria: "#b0bbb7",
    },
    {
      nome: "Sureshot",
      corPrimaria: "#00087f",
      corSecundaria: "#4142c9",
    },
    {
      nome: "Underground",
      corPrimaria: "#420057",
      corSecundaria: "#8b259d",
    },
    {
      nome: "Heart",
      corPrimaria: "#fb594b",
      corSecundaria: "#ffc0a7",
    },
    {
      nome: "Duelist",
      corPrimaria: "#8c2d5f",
      corSecundaria: "#f38cbc",
    },
    {
      nome: "Anima Squad",
      corPrimaria: "#bc2847",
      corSecundaria: "#ff7d87",
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    //console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div>
      <Banner />
      <Form
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;