import '../App.css';
import React from 'react';
import NavScrollExample from '../NavBar.jsx';
import ItemDetailContainer from '../Contacto/ItemDetailContainer';

function Contacto() {
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
        
        <div className="contacto">
          <ItemDetailContainer />
        </div>
  
  
        </body>
      </div>
  
    )
  }
  
  export default Contacto;