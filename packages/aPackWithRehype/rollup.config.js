export default [
  {
    input: "dist/apackwithrehype.esm.js",
    output: {
      file: "dist/apackwithrehype.esm.mjs",
      format: "esm",
    },
  },
  {
    input: "dist/apackwithrehype.cjs.js",
    output: {
      file: "dist/apackwithrehype.cjs.js",
      format: "cjs",
    },
  },
];
