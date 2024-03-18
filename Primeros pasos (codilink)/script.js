//Codi.link
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import React from "https://esm.sh/react@18.2.0";

const appDom = document.getElementById("app");
const root = ReactDOM.createRoot(appDom);

const button1 = React.createElement('button',{'data-id:':123},'Me gusta')
const button2 = React.createElement('button',{'data-id:':123},'Me gusta')
const button3 = React.createElement('button',{'data-id:':123},'Me gusta')

const fragmento1 = React.createElement(React.Fragment,null,[button1,button2,button3])



//Otra forma para crear elementos

const mi = React.createElement
const button4 = mi('button',{'data-id:':123},'Me gusta')
const fragmento2 = mi(React.Fragment,null,[fragmento1,button4])

root.render(fragmento2);

//Este código aún no es declarativo, sigue siendo imperativo
//Es porque debemos usar JSX, es una extensión de ema script y permite crear de una manera más declarativa los elementos.


//Un ejemplo, todo lo de arriba se puede resumir en JSX a:
/*
<React.Fragment>
  <button data-id="123">btn1</button>
  <button data-id="321">btn2</button>
  <button data-id="443">btn3</button>
</React.Fragment>
*/
/*Esto es posible realizarlo mediante webs como SWC que empaquetan el código
Aunque parezca html, no lo es. Estamos escribiendo JS de una forma declarativa*/


