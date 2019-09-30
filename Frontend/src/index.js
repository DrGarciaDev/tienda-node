import React from 'react';
import ReactDom from 'react-dom';

// Importación del componente APP
import App from './components/App';
// Importacion de bootstrap 4
import 'bootstrap/dist/css/bootstrap.css';


const container = document.getElementById('root');


// ReactDOM.render(__QUE__, __DONDE__)
ReactDom.render( <App /> , container);