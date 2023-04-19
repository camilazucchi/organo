import "./Button.css";

const Button = ({ children = "Button", className = "" }) => {
  return <button className={`button ${className}`}>{children}</button>;
};

export default Button;