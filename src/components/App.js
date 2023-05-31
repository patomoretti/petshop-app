import './App.css';
import React from 'react';
import NavBar from './NavBar.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="logo">
          <img src="../logo-pet.png" alt="logo" width="100%" />
        </div>

        <div className="navegation">
          <NavBar />
        </div>

      </header>

      <body>
        <div className="titulo">
          <h1>Bienvenidos a Pet Shop Mapache</h1>
          <h4>En la barra de navegacion podras ir a Cobayos y Alimentos</h4>
          <h4>En la card si clickeas "Ir al carrito", te va a llevar a esa seccion al igual que "Carrito" del NavBar</h4>
        </div>


      </body>


    </div>

  )
}

export default App;
