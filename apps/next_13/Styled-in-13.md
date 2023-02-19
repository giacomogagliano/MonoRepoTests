# Steps

- delete .babelrcs if it was used.
- make sure that this is present in the `next.config.js` file.
  ```js
  module.exports = {
  ...
    compiler: {
      styledComponents: true,
    },
  }
  ```
- in a `lib` or `component` folder in the root of the
  `next-13` application, create a file `registry.ts` with
  this code inside:

  ```js
  'use client'

  import React, { useState } from "react";
  import { u  seServerInsertedHTML } from "next/navigation";
  import { ServerStyleSheet, StyleSheetManager } from "styled-components";

  export default function StyledComponentsRegistry({
    children,
  }: {
    children: React.ReactNode;
  }) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
      const styles = styledComponentsStyleSheet.getStyleElement();
      // @  ts-ignore
      styledComponentsStyleSheet.instance.clearTag();
      return <>{styles}</>;
    });

    if (typeof window !== "undefined") return <>{children}</>;

    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    );
  }
  ```
