import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="logo" src="/images/logo-tft.png" alt="Logo do Organo" />
      <p>Desenvolvido por Camila Zucchi.</p>
      <div className="footer-icons">
        <a href="facebook.com" target="_blank">
          <img
            className="icon"
            src="/images/fb.png"
            alt="Logo do Facebook"
            rel="noopener noreferrer"
          />
        </a>
        <a href="twitter.com" target="_blank">
          <img
            className="icon"
            src="/images/tw.png"
            alt="Logo do Twitter"
            rel="noopener noreferrer"
          />
        </a>
        <a href="instagram.com" target="_blank">
          <img
            className="icon"
            src="/images/ig.png"
            alt="Logo do Instagram"
            rel="noopener noreferrer"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;