import React , {useState, createContext} from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import {Alimento} from './Alimentos/ItemDetailContainer';

export const Context = createContext();

export const CustomProvider = ({children}) => {
    const [productsAdded, setProductsAdded] = useState([]);

    function removeItem (itemID){}

    function clear () {}

    const isInCart = (id) => {
        
    };
    

    const addItem = (product, quantity) => {
        setProductsAdded((prevState) => prevState.concat(product));
    };

    const value = {productsAdded , addItem, clear, removeItem, isInCart};

    return <Context.Provider value={value}>{children}</Context.Provider>;

    const sendOrder = () => {

        const order = {
            buyer: {name: "Patricio", phone: "1520322032", mail: "ejemplo@hotmail.com"},
            items: [],
            total: 5
        };
    
        const db = getFirestore();
    
        const ordersCollection = collection(db, "orders");
    
        addDoc(ordersCollection, order).then(({id}) => sendOrder(id));
    };

};