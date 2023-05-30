import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from './customProvider';


function ItemListContainer() {
    const { id } = useParams();
    const { productsAdded, addItem } = useContext(Context);

    return (

        <div>
            <Link to="/category/cobayo">
                <button>Cobayo</button>
            </Link>

            <Link to="/category/alimentos">
                <button>Alimentos</button>
            </Link>

            {id && id === "cobayo" && (
                <div>
                    <h4>Cobayos</h4>
                    <p>Aca irian los cobayos con descripcion</p>
                    {/* <button onClick={() => addItem(product)}>Agregar al carrito</button> */}
                </div>
            )}
            {id && id === "alimento" && (
                <div>
                <h4>Alimento</h4>
                <p>Aca irian los alimentos con descripcion</p>
                {/* <button onClick={() => addItem(comida)}>Agregar al carrito</button> */}
            </div>
            )};

        </div>
    )  
}


export default ItemListContainer;
