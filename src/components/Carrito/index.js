import '../App.css';
import React from 'react';
import NavScrollExample from '../NavBar.jsx';

function CarritoCompras() {
    return (
      <div className="App">
        <header className="App-header">
  
          <div className="logo">
            <img src="../logo-pet.png" alt="logo" width="100%" />
          </div>
  
          <div className="navegationbar">
            <NavScrollExample />
          </div>
  
        </header>
  
        <body>
        <div className="carritocompras">
          <h4>Carrito de compras en proceso de CSS</h4>
        </div>

        </body>
      </div>
  
    )
}
  
export default CarritoCompras;
