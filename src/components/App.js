import './App.css';
import React from 'react';
// import NavBar from './NavBar.jsx';
import NavScrollExample from './NavBar.jsx';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="logo">
          <img src="../logo-pet.png" alt="logo" width="100%" />
        </div>
        <div className='navegationbar'>
          <NavScrollExample />
        </div>

      </header>

      <body>
        <div className="principalpage">

          {/* GALERIA */}
          <div className="galery">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/galeria/canario.jpg"
                  alt="Canario"
                />
                <Carousel.Caption>
                  <h3>Canario</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/galeria/cobayos.jpg"
                  alt="Cobayos"
                />

                <Carousel.Caption>
                  <h3>Cobayos</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/galeria/erizos.jpg"
                  alt="Erizos"
                />

                <Carousel.Caption>
                  <h3>Erizos</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* SOBRE NOSOTROS */}
          <div className="sobrenosotros">
            <div className="titulo_sobrenosotros animate__animated animate__fadeInUp animate__faster 500ms">
              <h4>Sobre Nosotros</h4>
            </div>

            <div className="sobrenosotros_texto_foto animate__animated animate__fadeInUp animate__faster 500ms">
              <div className="fotolocal">
                <img src="../images/index/pet-shop-mapache-local-848x670.jpg.jpg" width="100%" alt="Local Mapache Pájareria Acuario" />
              </div>

              <div className="texto">
                <p> Mas de 25 años en el rubro pajarería y acuario avalan nuestra trayectoria. Te
                  brindaremos
                  todo
                  el asesoramiento necesario para el cuidado y alimentación de todas las mascotas
                  vendidas
                  en
                  nuestro local. Comunícate con nosotros cuantas veces quieras para consultarnos
                  cualquier
                  duda
                  que tengas. Nosotros somos los primeros interesados en la conformidad de nuestros
                  clientes.
                </p>
              </div>

            </div>

          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

      </body>

    </div>
  )
}

export default App;
