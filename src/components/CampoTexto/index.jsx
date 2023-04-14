import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}`;

  const aoDigitar = (event) => {
    props.aoAlterar(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={aoDigitar}
        required={props.mandatory}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;