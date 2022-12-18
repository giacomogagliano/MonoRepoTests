import React from "react";
import styled, { css } from "styled-components";

// questi elementi devono essere dichiarati con lettera
// maiuscola all'inizio: `IlMioComponente`

// semplice elemento styled
export const StyledHTMLElement = styled.div`
  width: 100%;
`;

// styled da un elemento esistente:
// prima creiamo il Componente Funzionale
export const MyComponent = () => <div>my component</div>;

// e poi lo passiamo come argomento alla funzione `styled`
export const StyledFunctionComponent = styled(MyComponent)`
  width: 100%;
`;

// questa funzione crea una string di css che puo essere
// chiamata all'interno di uno styled components
// > Non puo essere chiamata come un componente, deve essere
// > inserita all'interno di un altra dichiarazione di
// > styled, fra le ``.
export const StringDiCss = css`
  width: 100%;
`;

export const StyleCheUsaLaString = styled.button`
  /** per chiamare la variabile dobbiamo usare $\{\} e
   * inserire la variabile all'interno delle graffe */
  ${StringDiCss}
`;
