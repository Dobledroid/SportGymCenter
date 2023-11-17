// UpperFooter.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './UpperFooter.css';

function UpperFooter() {
  const enlacePerfilFacebook = 'https://www.facebook.com/profile.php?id=100063449692054';
  return (
    <footer className="UpperFooter text-white fontGoogle">
      <Container className="custom-container">
        <Row className="justify-content-center">

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="section">
              <h5>Acerca de</h5>
              <p>Sport Gym Center</p>
              <p>Precios y planes</p>
              <p>Contacto</p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="section">
              <h5>Redes Sociales</h5>
              <p>
                <a href={enlacePerfilFacebook} className="enlace-facebook" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="section">
              <h5>Mi Cuenta</h5>
              <p>Resumen</p>
              <p>Favoritos</p>
              <p>Ordenes</p>
              <p>Direcciones</p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="section">
              <h5>Ubicación</h5>
              <p>Ote. 7 MZC LT7, Parque de Poblamiento, 43000 Huejutla de Reyes, Hgo.</p>
              <p>7717935563</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default UpperFooter;
