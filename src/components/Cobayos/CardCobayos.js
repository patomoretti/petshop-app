import Contador from '../ItemCount';


const Cobayos = (cobayo) => {
    return (
        <div className="diferentesalimentos">
            
            <div className="variedadesalimentos">

                <div className="imagenproducto">
                        <img src={cobayo.imagen} width="100%"alt={cobayo.nombre} />
                </div>
                
                <div className="nombreproducto">
                    <h2>{cobayo.nombre}</h2>
                </div>

                <div className="precioproducto">
                    <h4>{cobayo.precio}</h4>
                </div>

                <div className="contadorproducto">
                    <Contador />
                </div>

            </div>
            
        </div>
    )
}


export default Cobayos;