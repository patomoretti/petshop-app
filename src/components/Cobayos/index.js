import '../App.css';
import React from 'react';
import NavBar from '../NavBar';
import ItemDetailContainer from '../Cobayos/ItemDetailContainer';

function Cobayos() {
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
        
        <div className="productos">
          <ItemDetailContainer />
        </div>
  
  
        </body>
      </div>
  
    )
  }
  
  export default Cobayos;