import Contador from './ItemCount';
import {Link} from "react-router-dom";


const Cards = (card) => {
    return (
        <div className="diferentescard">
            
            <div className="variedadescard">
                {card.id}
                <div className="imagencard">
                        <img src={card.imagen} width="100%"alt={card.nombre} />
                </div>
                
                <div className="nombrecard">
                    <h2>{card.nombre}</h2>
                </div>

                <div className="descripcioncard">
                    <p>{card.descripcion}</p>
                </div>

                <div className="preciocard">
                    <h4>{card.precio}</h4>
                </div>

                <Link to="/cart">
                    <button> Ir al carrito </button>
                </Link>

                <Link to="/itemdetailcontainer">
                    <button>Ver mas</button>
                </Link>

                <div className="contadorcard">
                    <Contador />
                </div>

            </div>
            
        </div>
    )
}


export default Cards;