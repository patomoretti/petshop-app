import React , {useState, createContext} from 'react';


export const Context = createContext();

export const CustomProvider = ({children}) => {
    const [productsAdded, setProductsAdded] = useState([]);

    const addItem = () => {
        setProductsAdded((prevState) => prevState.concat())
    }

    const value = {productsAdded , addItem };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}