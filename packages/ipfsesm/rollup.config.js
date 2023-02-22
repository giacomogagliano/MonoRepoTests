export default [
  {
    input: "dist/ipfsesm.esm.js",
    output: {
      file: "dist/ipfsesm.mjs",
      format: "esm",
    },
  },
  {
    input: "dist/ipfsesm.cjs.js",
    output: {
      file: "dist/ipfsesm.cjs",
      format: "cjs",
    },
  },
  {
    input: "dist/ipfsesm.cjs.dev.js",
    output: {
      file: "dist/ipfsesm.cjs.dev.cjs",
      format: "cjs",
    },
  },
  {
    input: "dist/ipfsesm.cjs.prod.js",
    output: {
      file: "dist/ipfsesm.cjs.prod.cjs",
      format: "cjs",
    },
  },
];
