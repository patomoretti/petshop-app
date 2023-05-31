import React , {useContext}from 'react';
import { Context } from './customProvider';
import { Link } from "react-router-dom";

export default function Carrito() {
    const {productsAdded} = useContext(Context);
    return (
        <Link to="/cart">
            <a href="CarritoCompras" className="cart">
                <img src="./images/carrito.jpg" alt="logo carrito" width="50%" />
                <span>{productsAdded.length}</span>
                <h5>Carrito</h5>
            </a>
        </Link>
    )
}
