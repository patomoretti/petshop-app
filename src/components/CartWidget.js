import React , {useContext}from 'react';
import { Context } from './customProvider';

export default function Carrito() {
    const {productsAdded} = useContext(Context);
    return (

        <a href="carrito" className="cart">
            <img src="./images/carrito.jpg" alt="logo carrito" width="50%" />
            <span>{productsAdded.length}</span>
            <h5>Carrito</h5>
            
        </a>
    )
}
