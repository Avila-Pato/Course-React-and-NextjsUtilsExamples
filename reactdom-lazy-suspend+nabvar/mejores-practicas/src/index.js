import React from 'react'; // Importar React
import ReactDOM from 'react-dom/client'; // Importar ReactDOM para renderizar el componente
import App from './App'; // Importar el componente principal de la aplicación
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter para habilitar el enrutamiento
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

// BrowserRouter es un componente que utiliza la API 
// de historial de HTML5 para habilitar el
// enrutamiento en aplicaciones de una sola página (SPA) en React.

const root = ReactDOM.createRoot(document.getElementById('root')); // Crear la raíz del DOM para la aplicación
root.render(
   <BrowserRouter>
      <React.StrictMode>
         <App /> {/* Renderizar el componente principal dentro de BrowserRouter */}
      </React.StrictMode>
   </BrowserRouter>
);

// Si deseas comenzar a medir el rendimiento de tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envía a un punto de análisis. Aprende más: https://bit.ly/CRA-vitals
