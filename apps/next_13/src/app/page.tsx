"use client";

import React from "react";
import styled, { css } from "styled-components";

export const BlueText = css`
  color: blue;
`;

export const WhiteText = css`
  color: white;
`;

const Borderradius = css`
  border-radius: 10px;
`;
export const A = css`
  background-color: blue;
`;

const Bug = css`
  background-color: green;
`;

const Padding = css`
  padding: 10px;
`;

const Div2 = styled.div`
  #div {
    ${Bug}
    ${Padding}
  }
`;

const p = 0;
const b = 0;

const i = {
  p,
  b,
};

const GreenCompo = ({ children }: { children: any }) => {
  return (
    <Div2>
      <div id="div" className="bug padding" style={{ width: "100%" }}>
        bug??
        {children}
      </div>
    </Div2>
  );
};

/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////

const Div = styled.div`
  background-color: red;
  height: 100vh;
  width: 100%;
  .btn {
    border-radius: 0;
    border: none;
    ${A}
  }
  .bug {
    background-color: yellow;
  }
`;

export default function page() {
  return (
    <>
      <Div>
        <button className="btn">ciao</button>
        <GreenCompo>ciao</GreenCompo>
        <button className="bug">ciao</button>
      </Div>
    </>
  );
}
