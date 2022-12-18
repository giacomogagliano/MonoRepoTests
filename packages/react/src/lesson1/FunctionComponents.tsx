import React from "react";

/////////////////////
///// ARROW FUNCTION

// con ritorno implicito
export const ArrowFunctionComponent_implicitReturn = () => <div>some text</div>;

// con ritorno esplicito
export const ArrowFunctionComponent_explicitReturn = () => {
  return <div>some text</div>;
};

/////////////////////
///// NORMAL FUNCTION

// con ritorno esplicito
export function FunctionComponent_implicitReturn() {
  return <div>some text</div>;
}

// con ritorno dichiarazione di costante
// funcion è usata in modo anonimo
export const FunctionComponent_implicitReturn_declaration = function () {
  return <div>some text</div>;
};
