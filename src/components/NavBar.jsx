import React from 'react';
import Carrito from './CartWidget';

export default function NavBar() {

    return (
        <nav>
            <div className="navegacion">
                <div className="sub-nav">
                    <a href="/">Inicio</a>
                </div>

                <div className="sub-nav">
                    <a href="cobayos">Cobayos</a>
                </div>

                <div className="sub-nav">
                    <a href="alimentos">Alimento</a>
                </div>

                <div className="sub-nav">
                    <a href="contacto">Contacto</a>
                </div>

                <div className="cart">
                    <Carrito />
                </div>
            </div>
        </nav>
    )
}




