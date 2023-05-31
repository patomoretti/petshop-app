import { useState } from 'react';
import Card from '../Card';

const Cobayos = () => {

    const [cobayo, setCobayo] = useState([
        {
            "nombre": "Abisinio",
            "id": 112,
            "precio": "$6000",
            "imagen": '../images/cobayoshamsters/cobayo-abisinio-2000x1312.jpg',

        },
        {
            "nombre": "Abisinio",
            "id": 113,
            "precio": "$6000",
            "imagen": '../images/cobayoshamsters/cobayo-abisinio-bicolor-2000x1333.jpg',

        },
        {
            "nombre": "Pelo Corto",
            "id": 114,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayo-pelo-corto-2000x1333.jpg',

        },
        {
            "nombre": "Peruano",
            "id": 115,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayo-peruano-2000x1325.jpg',

        },
        {
            "nombre": "Abisinio",
            "id": 116,
            "precio": "$6000",
            "imagen": '../images/cobayoshamsters/cobayos-abisinio-2000x1342.jpg',

        },
        {
            "nombre": "Pelo Corto",
            "id": 117,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayos-pelo-corto-2-2000x1333.jpg',

        },
        {
            "nombre": "Pelo Corto",
            "id": 118,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayos-pelo-corto-2000x1166.jpg',

        },
        {
            "nombre": "Peruano",
            "id": 119,
            "precio": "$4500",
            "imagen": '../images/cobayoshamsters/cobayos-peruanos-2000x1330.jpg',

        },


    ]);

    return (
        <div className="productos">
            {cobayo.map((c) => {

                return (
                    <Card
                        key={c.id}
                        nombre={c.nombre}
                        descripcion={c.descripcion}
                        precio={c.precio}
                        imagen={c.imagen}
                        carrito={c.carrito}
                    />
                );

            })}
        </div>
    )

}


export default Cobayos;