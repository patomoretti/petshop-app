import Carrito from './Cart';

export default function NavBar() {

    return (
        <nav>
            <div className="navegacion">
                <div className="sub-nav">
                    <a href="inicio">Inicio</a>
                </div>

                <div className="sub-nav">
                    <a href="cobayos">Cobayos</a>
                </div>

                <div className="sub-nav">
                    <a href="alimentos">Alimento</a>
                </div>

                <div className="sub-nav">
                    <a href="contacto">Contactos</a>
                </div>

                <div className="cart">
                    <Carrito />
                </div>
            </div>
        </nav>
    )
}




