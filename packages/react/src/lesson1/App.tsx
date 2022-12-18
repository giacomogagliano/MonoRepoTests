import React from "react";
import { ArrowFunctionComponent_explicitReturn } from "./FunctionComponents";
import { ArrowFunctionComponent_implicitReturn } from "./FunctionComponents";
import { FunctionComponent_implicitReturn } from "./FunctionComponents";
import { FunctionComponent_implicitReturn_declaration } from "./FunctionComponents";
import { StyleCheUsaLaString } from "./StyledComponent";
import { StyledFunctionComponent } from "./StyledComponent";
import { StyledHTMLElement } from "./StyledComponent";

import { ComponentFromJsx, JsxElement } from "./JsxElement";

export function App() {
  return (
    <div>
      <ArrowFunctionComponent_explicitReturn />
      <ArrowFunctionComponent_implicitReturn />
      <FunctionComponent_implicitReturn />
      <FunctionComponent_implicitReturn_declaration />
      <StyledHTMLElement />
      <StyledFunctionComponent />
      <StyleCheUsaLaString />
      {/* un elemento Jsx non è una funzione, quindi non può essere chiamato come un
       * componente
       */}
      {JsxElement}
      {/** una volta "wrappato" in una funzione, anche un elemento jsx puo essere
       * usato come
       */}
      <ComponentFromJsx />
    </div>
  );
}
