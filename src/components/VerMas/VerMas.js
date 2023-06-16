import '../App.css';
import React from 'react';
import NavScrollExample from '../NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../ItemListContainer';

function VerMas() {
    return (
        <div className="vermas">
            <header className="App-header">

                <div className="logo">
                    <img src="../logo-pet.png" alt="logo" width="100%" />
                </div>
                <div className='navegationbar'>
                    <NavScrollExample />
                </div>

            </header>

            <body>
                <ItemListContainer />


            </body>

        </div>

    )
}

export default VerMas;