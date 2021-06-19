import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/javascript/index.js",
  output: {
    file: "dist/javascript/index.js",
    format: "cjs",
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
  ],
};
