// import Contador from './ItemCount';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function BasicExample(card) {
    return (
        <Card className="bootstrapcard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.imagen} />
            <Card.Body>
                <Card.Title>{card.nombre}</Card.Title>
                <Card.Text>
                    {card.descripcion}
                </Card.Text>
                <div className="cardbuttons">
                    
                    <Link to="/itemdetailcontainer">
                        <Button variant="primary">Ver mas</Button>
                    </Link>
                
                    <Link to="/cart">
                        <Button variant="success"> Ir al carrito </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}
