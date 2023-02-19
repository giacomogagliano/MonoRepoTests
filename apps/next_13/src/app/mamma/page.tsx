import React, { Suspense } from "react";
import Compo from "../../components/Compo";
import { Data as ClientComp } from "./Data";
import { TextBlue } from "./Styles";

function mamm(): React.ReactNode {
  return (
    <div>
      mamm
      <Compo></Compo>
      <ClientComp></ClientComp>
      <Suspense fallback={<div>loading </div>}></Suspense>
      <TextBlue>ciao</TextBlue>
    </div>
  );
}

export default mamm;
