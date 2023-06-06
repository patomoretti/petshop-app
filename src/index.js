import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './components/App';
import Cobayos from '../src/components/Cobayos/index';
import Alimentos from '../src/components/Alimentos/index';
import Contacto from './components/Contacto/index';
import CarritoCompras from './components/Carrito/index';
import ItemListContainer from './components/ItemListContainer';
import Alimento from './components/Alimentos/ItemDetailContainer';
import { CustomProvider } from './components/customProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cobayos",
    element: <Cobayos />,
  },
  {
    path: "/alimentos",
    element: <Alimentos />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/cart",
    element: <CarritoCompras />,
  },
  {
    path: "/category/:id",
    element: <ItemListContainer />,
  },
  {
    path: "/item/:id",
    element: <Alimento />,
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CustomProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </CustomProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
