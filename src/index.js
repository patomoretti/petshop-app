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
import CarritoComp from './components/Cart.jsx';
import Alimento from './components/Alimentos/ItemDetailContainer';
import VerMas from './components/VerMas/VerMas';
import { CustomProvider } from './components/customProvider';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBelXPO5jYcEeG-6ip-omTCDLe8tOM5Xa0",
  authDomain: "petshopmapache-fa0cb.firebaseapp.com",
  projectId: "petshopmapache-fa0cb",
  storageBucket: "petshopmapache-fa0cb.appspot.com",
  messagingSenderId: "461169165163",
  appId: "1:461169165163:web:25550a8f3725ae1f13822e",
  measurementId: "G-K96SNB58YH"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


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
    path: "/detalle_producto",
    element: <VerMas />,
  },
  {
    path: "/cart",
    element: <CarritoComp />,
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
