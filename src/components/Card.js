import Contador from './ItemCount';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React , {useContext} from 'react';
import { Context } from './customProvider';


export default function BasicExample(card) {

    const {addItem} = useContext(Context);

    const addProductToCart = (product) => {
        addItem(product);
    };

    return (
        <Card className="bootstrapcard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.imagen} />
            <Card.Body>
                <Card.Title>{card.nombre}</Card.Title>
                <Card.Text>
                    {card.descripcion}
                </Card.Text>
                <div className="cardbuttons">
                    
                    <Link to="/detalle_producto">
                        <Button onClick variant="primary">Ver mas</Button>
                    </Link>
                
                    <Button onClick={() => addProductToCart()} variant="success"> Agregar al carrito</Button>

                    <Link to="/cart">
                        <Button variant="secondary">Ir al carrito</Button>
                    </Link>

                    <Contador/>

                </div>
            </Card.Body>
        </Card>
    );
}
