import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card';
// import {getDocs, doc , getFirestore, collection} from 'firebase/firestore';

const Alimento = () => {

    // useEffect (() => {
    //     const db = getFirestore();
    //     const itemRef = collection (db, "alimento", '0pb5CeOlk6O3WQMHW7Ks', '3iwBxtioygcWLs9r2gsJ',     '9En4CFWjPjV1OCVpUseL', '9En4CFWjPjV1OCVpUseL', 'Gs0OKmgTs8nw0jzuHTI7', 'H4LvHVk686t5UPZdCpb9', 'IRKg5da0fH0Aza7QIXym', 'Iy1gvzqE1YFUYdFWHQnD', 'LjXEx84OZvCWqCJu76ik', 'jBNywsYjYKvSAonAfTIg', 'nGKXn9kXbpmnbqVbHkZ0', 'nuR0MdQe0SjhURnJCXYg', 's4fu6YBsoypxsVCug9nw', 'u5336COJ5wBZZq6HEUmh' );

    //     getDocs(itemRef)
    //         .then ((snapshot) => {
                
    //             setProducts(() =>
    //                 snapshot.collection.map((collection) => ({id: collection.id, ...collection.data}))

    //             );
    //         })
    //         .catch((error) => console.log({ error }));


    // }, []);

    

    const [comida, setComida] = useState([
        {
            "nombre": "Alpiste",
            "id": 11,
            "descripcion": "Primera calidad ventilado se vende fraccionado o por bolsa de 25 kg bajo pedido.",
            "precio": "$1000",
            "imagen": '../images/alimentos/alpiste-1184x1288.jpg',

        }, {
            "nombre": "Mezcla canarios",
            "id": 12,
            "descripcion": "Mezcla premium para canarios de primera calidad, se vende fraccionada o por bolsa de 25 kg bajo pedido.",
            "precio": "$1800",
            "imagen": "../images/alimentos/mezcla-canarios-1184x1241.jpg",

        }, {
            "nombre": "Colza",
            "id": 13,
            "descripcion": "Colza de primera calidad, se vende fraccionada o por bolsa de 25 kg bajo pedido.",
            "precio": "$3000",
            "imagen": "../images/alimentos/colza-1184x1311.jpg",

        }, {
            "nombre": "Mezcla para cardenal",
            "id": 14,
            "descripcion": "Mezcla premium para cardenal de primera calidad, se vende fraccionada o por bolsa de 25 kg bajo pedido.",
            "precio": "$2500",
            "imagen": "../images/alimentos/mezcla-cardenal-1184x1246.jpg",

        }, {
            "nombre": "Mijo",
            "id": 15,
            "descripcion": "Primera calidad ventilado se vende fraccionado o por bolsa de 25 kg bajo pedido.",
            "precio": "$500",
            "imagen": "../images/alimentos/mijo-1184x1280.jpg",

        }, {
            "nombre": "Girasol confitero",
            "id": 16,
            "descripcion": "Primera calidad se vende fraccionado o por bolsa de 25 kg bajo pedido.",
            "precio": "$1800",
            "imagen": "../images/alimentos/girasol-confitero-1184x1251.jpg",

        }, {
            "nombre": "Maíz Quebrado",
            "id": 17,
            "descripcion": "Primera calidad se vende fraccionado o por bolsa de 25 kg bajo pedido.",
            "precio": "$1400",
            "imagen": "../images/alimentos/maz-quebrado-1184x1341.jpg",

        }, {
            "nombre": "Alimento balanceado pollos y algunas aves silvestres",
            "id": 18,
            "descripcion": "Balanceado primera calidad se vende fraccionado o por bolsa de 25 kg bajo pedido.",
            "precio": "$1200",
            "imagen": "../images/alimentos/parrillero-engorde-1184x1296.jpg",

        }, {
            "nombre": "Alimento balanceado pollitos y algunas aves silvestres",
            "id": 19,
            "descripcion": "Balanceado primera calidad se vende fraccionado o por bolsa de 25 kg bajo pedido.",
            "precio": "$1600",
            "imagen": "../images/alimentos/parrillero-iniciador-1184x1332.jpg",

        }, {
            "nombre": "Abizin",
            "id": 20,
            "descripcion": "Primera calidad se vende fraccionado o por bolsa de 1 kg.",
            "precio": "$900",
            "imagen": "../images/alimentos/abizin-1184x1261.jpg",

        }, {
            "nombre": "Cantaxantina",
            "id": 21,
            "descripcion": "Premium para pigmentar canarios de factor rojo, se vende fraccionada mínimo 10 gramos. También la podes comprar directamente adicionada en la pasta de huevo o bizcocho.",
            "precio": "$1800",
            "imagen": "../images/alimentos/cantaxantina-1184x1283.jpg",

        }, {
            "nombre": "Girasol confitero",
            "id": 22,
            "descripcion": "Primera calidad se vende fraccionado o por bolsa de 25 kg bajo pedido.",
            "precio": "$1800",
            "imagen": "../images/alimentos/girasol-confitero-1184x1251.jpg",

        }, {
            "nombre": "Pasta de huevo Mesias",
            "id": 23,
            "descripcion": "Excelente complemento para la alimentación de tus aves rico en proteínas, vitamínas, minerales, aminoacidos y oligoelementos. Mejora notablemento el plumaje de tus pájaros y acelera el crecimiento de sus pichones (especial para embuche de crias). Suministrandole una pequeña cantidad de este producto diariamente tendrás pájaros vitales y saludables. Se vende fraccionada o por bolsa de 5 kg tambíen adicionada con cantaxantina para pigmentar canarios con factor rojo.",
            "precio": "$3000",
            "imagen": "../images/alimentos/pasta-de-huevo-mesias-1184x1220.jpg",

        }
    ]);

    return (
        <div className="productos">
            {comida.map((p) => {

                return (
                    <Card
                        key={p.id}
                        nombre={p.nombre}
                        descripcion={p.descripcion}
                        precio={p.precio}
                        imagen={p.imagen}
                    />
                );

            })}
        </div>
    )

}


export default Alimento;

