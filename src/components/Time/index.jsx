import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ nome, colaboradores, corPrimaria, corSecundaria, aoDeletar }) => {
  if (colaboradores.length === 0) {
    return null;
  }
  
  return (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => (
          <Colaborador
              corNome={corPrimaria}
              corDeFundo={corPrimaria}
              key={indice}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={aoDeletar}
            />
        ))}
      </div>
    </section>
  );
  };
  
export default Time;