import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

//Para evitar tener siempre el mismo código, por ejemplo creando varios botones
//con el mismo estilo, se puede crear un componente que se pueda reutilizar

//Los componentes deben llamarse en PascalCase
//Los componentes deben ser funciones o clases
//Los componentes deben devolver un solo elemento padre

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
)