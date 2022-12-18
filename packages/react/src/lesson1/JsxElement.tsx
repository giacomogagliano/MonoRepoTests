import React from "react";
// questo è un elemento Jsx che puo essere chiamato in una
// applicazione React
export const JsxElement = <div>Sono un elemento JSX</div>;

// un elemento JSX può essere reso facilmento un componente,
// basta metterlo come ritorno implicito di una arrow
// funcion, cosi:
export const ComponentFromJsx = () => JsxElement;
// ora questo elemento è una funzione e può essere chiamato
// come un Componente: `<Component/>
