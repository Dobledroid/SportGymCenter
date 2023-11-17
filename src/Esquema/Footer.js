import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import './Footer.css';
import UpperFooter from "../Esquema/UpperFooter";

function Footer() {
  return (
    <div>
      <UpperFooter />
      <footer className="Footer text-white fontGoogle">
        <Container>
          <div className="footer-menu">
            <h5 className="footer-service-menu-item"><Link to="/privacidad" className="footer-link">Privacidad</Link></h5>
            <h5 className="footer-service-menu-item middle-link"><Link to="/terminos-y-condiciones" className="footer-link">Términos y condiciones</Link></h5>
            <h5 className="footer-service-menu-item"><Link to="/cookies" className="footer-link">Cookies</Link></h5>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
