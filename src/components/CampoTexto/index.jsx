import "./CampoTexto.css";

const CampoTexto = ({
  label,
  value,
  aoAlterar,
  mandatory,
  placeholder,
  ...rest
}) => {
  const aoDigitar = (event) => {
    aoAlterar(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label htmlFor="{rest.id}">{label}</label>
      <input
        id={rest.id}
        value={value}
        onChange={aoDigitar}
        required={mandatory}
        placeholder={`${placeholder}`}
        {...rest}
      />
    </div>
  );
};

export default CampoTexto;
