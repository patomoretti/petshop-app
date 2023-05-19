import { Link , useParans } from "react-router-dom";
import Alimentos from './Alimentos/index';
import Cobayos from './Cobayos/index';

function ListContainer() {
    const { id } = useParans();
    return (
        <div>
            <Link to="/category/cobayo">
                <button>Cobayo</button>
            </Link>

            <Link to="/category/alimento">
                <button>Alimentos</button>
            </Link>

            {id && id === "cobayo" && (
                <Cobayos />
            )}
            {id && id === "alimento" && (
                <Alimentos />
            )}
        </div>
    );
}

export default ListContainer;

