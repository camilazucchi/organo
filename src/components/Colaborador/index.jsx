import "./Colaborador.css";
import PropTypes from "prop-types";

const Colaborador = ({
  nome,
  cargo,
  imagem,
  corDeFundo,
  corNome,
  aoDeletar,
}) => {
  const cabecalhoStyles = { backgroundColor: corDeFundo };
  const nomeStyles = { color: corNome };
  const moedasIconStyles = {
    width: "20px",
    height: "20px",
    marginRight: "5px",
  };

  return (
    <div className="colaborador">
      <div className="cabecalho" style={cabecalhoStyles}>
        <img className="colaborador-image" src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4 style={nomeStyles}>{nome}</h4>
        <h5>
          <img
            src="/images/coins.png"
            alt="Imagem de moedas"
            style={moedasIconStyles}
          />
          {cargo}
        </h5>
      </div>
    </div>
  );
};

Colaborador.propTypes = {
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  corDeFundo: PropTypes.string.isRequired,
  corNome: PropTypes.string.isRequired,
  aoDeletar: PropTypes.func.isRequired,
};

export default Colaborador;