import React , {useState, createContext} from 'react';
import ItemDetailContainer from './Alimentos/ItemDetailContainer';

export const Context = createContext();

export const CustomProvider = ({product}) => {
    const [productsAdded, setProductsAdded] = useState([]);

    const addItem = () => {
        setProductsAdded((prevState) => prevState.concat())
    }

    const value = {productsAdded , addItem };

    return <Context.Provider value={value}>{product}</Context.Provider>;
}