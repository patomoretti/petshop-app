import Contador from '../ItemCount';


const Alimentos = (props) => {
    return (
        <div className="diferentesalimentos">
            

            <div className="variedadesalimentos">

                <div className="imagenproducto">
                        <img src={props.imagen} width="100%"alt={props.nombre} />
                </div>
                
                <div className="nombreproducto">
                    <h2>{props.nombre}</h2>
                </div>

                <div className="descripcionproducto">
                    <p>{props.descripcion}</p>
                </div>

                <div className="precioproducto">
                    <h4>{props.precio}</h4>
                </div>

                <div className="contadorproducto">
                    <Contador />
                </div>
                
            </div>
            
        </div>
    )
}

export default Alimentos;