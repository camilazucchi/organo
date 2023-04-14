import { useState } from "react";
import Button from "../Button";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Form.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    // limpando o nosso formulário:
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do seu time.</h2>
        <CampoTexto
          mandatory={true}
          label="Nome"
          placeholder="Digite o nome do campeão"
          value={nome}
          aoAlterar={(value) => setNome(value)}
        />
        <CampoTexto
          mandatory={true}
          label="Custo"
          placeholder="Digite o custo do campeão"
          value={cargo}
          aoAlterar={(value) => setCargo(value)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          aoAlterar={(value) => setImagem(value)}
        />
        <ListaSuspensa
          mandatory={true}
          label="Sinergia"
          itens={props.times}
          value={time}
          aoAlterar={(value) => setTime(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;