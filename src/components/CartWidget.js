import React , {useContext} from 'react';
import { Context } from './customProvider';
import { Link } from "react-router-dom";


export default function Carrito() {
    const {productsAdded} = useContext(Context);

    return (
        <Link to="/cart">
            <div className="navcarrito">
                
                <span>{productsAdded.length}</span>
                
                <div className="imagencart">
                    <img src="./images/carrito.jpg" alt="logo carrito" width="100%" />
                    
                </div>
                
            </div>
        </Link>
    )
}
