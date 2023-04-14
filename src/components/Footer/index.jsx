import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="facebook.com" target="_blank">
          <img className="icons" src="/images/fb.png" alt="Logo do Facebook" />
        </a>
        <a href="twitter.com" target="_blank">
          <img className="icons" src="/images/tw.png" alt="Logo do Twitter" />
        </a>
        <a href="instagram.com" target="_blank">
          <img className="icons" src="/images/ig.png" alt="Logo do Instagram" />
        </a>
      </div>
      <img className="logo" src="/images/logo-tft.png" alt="Logo do Organo"></img>
      <p>Desenvolvido por Camila Zucchi.</p>
    </footer>
  );
};

export default Footer;
