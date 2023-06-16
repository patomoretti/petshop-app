import { useContext , useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from './customProvider';
import Alimento from "./Alimentos/ItemDetailContainer";
import Contador from "./ItemCount";
import { Button } from "react-bootstrap";
import CarritoComp from "./Cart";

export default function ItemListContainer() {

    const { id } = useParams();
    const { productsAdded, addItem } = useContext(Context);

    return (

        <div>

            {id && id === "Alimento" && (
                <div>
                    < div className="productoindividual">
                        <img src="imagen"></img>
                        <h4>Titulo</h4>
                        <p>Descripcion</p>
                        <p>Precio</p>
                        <Contador />
                        <Button onClick={() => productsAdded()} variant="success"> Agregar al carrito</Button>
                        <Link to="/cart">Ir al carrito</Link>
                    </div>
                </div>
            )};

        </div>
    )  
}