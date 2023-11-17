import React, { useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Header from "../Esquema/Header";
import Footer from "../Esquema/Footer";
import "../index.css";

import SimpleSlider from './SimpleSlider';

function Index() {
  return (
    <div>
      <Header />
      <body>
        <div>
          {/* Carrusel */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carrusel/1.jpg" // Ruta de la primera imagen del carrusel
                alt="Primera imagen"
              />
              {/* <Carousel.Caption>
              <h3>Título de la imagen 1</h3>
              <p>Descripción de la imagen 1.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            {/* Agrega más elementos de Carousel.Item para más imágenes del carrusel */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carrusel/2.jpg" // Ruta de la primera imagen del carrusel
                alt="Primera imagen"
              />
              {/* <Carousel.Caption>
              <h3>Título de la imagen 1</h3>
              <p>Descripción de la imagen 1.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carrusel/3.jpg" // Ruta de la primera imagen del carrusel
                alt="Primera imagen"
              />
              {/* <Carousel.Caption>
              <h3>Título de la imagen 1</h3>
              <p>Descripción de la imagen 1.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>

          {/* Sección 1 */}
          <section className="my-3">
            <h3>¿Qué temas de interesan?</h3>
            <p>Contenido de la sección 1.</p>
          </section>

          {/* Sección 2 */}
          <section className="my-3">
            <h1>Sección 2</h1>
            <p>Contenido de la sección 2.</p>
            <div class="card-group">
              <div className="card text-center">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                  <img
                    src="/images/productos/clear-whey.png"
                    className="card-img-top"
                    alt="brazos"
                    style={{ maxWidth: "100px", height: "200px" }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-header">
                    <h5 className="card-title font-weight-bold">Producto 1</h5>
                    <p className="card-text">Descripción del Producto 1</p>
                  </div>
                  <div className="card-footer">
                    <p className="card-text font-weight-bold">$10.99</p>
                    <button className="btn btn-dark text-white">
                      ¡Lo necesito!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h1>Sección 3</h1>

            <div>
            <SimpleSlider />

            </div>


          </section>
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default Index;
