import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corDeFundo, corNome }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img
          src={imagem}
          alt={nome}
        ></img>
      </div>
      <div className="rodape">
        <h4 style={{ color: corNome }}>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;