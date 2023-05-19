import { useState } from 'react';
import Cobayos from './CardCobayos';

const AnimalesCobayos = () => {

    const [cobayo, setCobayo] = useState([
        {
            "nombre": "Cobayo Abisinio",
            "id": 112,
            "precio": "$6000",
            "imagen": '../images/cobayoshamsters/cobayo-abisinio-2000x1312.jpg',

        },
        {
            "nombre": "Cobayo Abisinio",
            "id": 113,
            "precio": "$6000",
            "imagen": '../images/cobayoshamsters/cobayo-abisinio-bicolor-2000x1333.jpg',

        },
        {
            "nombre": "Cobayo Pelo Corto",
            "id": 114,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayo-pelo-corto-2000x1333.jpg',

        },
        {
            "nombre": "Cobayo Peruano",
            "id": 115,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayo-peruano-2000x1325.jpg',

        },
        {
            "nombre": "Cobayo Abisinio",
            "id": 116,
            "precio": "$6000",
            "imagen": '../images/cobayoshamsters/cobayos-abisinio-2000x1342.jpg',

        },
        {
            "nombre": "Cobayo Pelo Corto",
            "id": 117,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayos-pelo-corto-2-2000x1333.jpg',

        },
        {
            "nombre": "Cobayo Pelo Corto",
            "id": 118,
            "precio": "$4000",
            "imagen": '../images/cobayoshamsters/cobayos-pelo-corto-2000x1166.jpg',

        },
        {
            "nombre": "Cobayo Peruano",
            "id": 119,
            "precio": "$4500",
            "imagen": '../images/cobayoshamsters/cobayos-peruanos-2000x1330.jpg',

        },


    ]);

    return (
        <div className="cobayoo">
            {cobayo.map((c) => {

                return (
                    <Cobayos
                        nombre={c.nombre}
                        precio={c.precio}
                        imagen={c.imagen}
                    />
                );

            })}
        </div>
    )

}


export default AnimalesCobayos;