import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return props.colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corNome={props.corPrimaria}
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    // desafio: adicionar tal componente se tiver vazio!
    ""
  );
};

export default Time;
