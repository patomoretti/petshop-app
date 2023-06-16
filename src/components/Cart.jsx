import NavScrollExample from "./NavBar";
import { agregarAlCarrito } from "./ItemListContainer";
import CustomProvider from './customProvider';


export default function CarritoComp() {
    
    return (
        <div className="carritocompras">
            <header className="App-header">

                <div className="logo">
                    <img src="../logo-pet.png" alt="logo" width="100%" />
                </div>
                <div className='navegationbar'>
                    <NavScrollExample />
                </div>

            </header>

            <body>

                <h4>Carrito de compras!! </h4>

            </body>

        </div>

    )
}
