import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/javascript/index.ts",
  output: {
    file: "dist/javascript/index.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
    terser(),
    typescript({ sourceMap: true }),
  ],
};
