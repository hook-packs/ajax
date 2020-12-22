import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import filesize from "rollup-plugin-filesize";
// import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
const input = "src/ajax.js";
export default [
  {
    input,
    output: {
      name: "HookAjax",
      file: pkg.browser,
      format: "umd",
      globals: {
        axios: "axios"
      }
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**"
      }),
      // terser({ ie8: true }),
      filesize()
    ],
    external: (id) => /axios/.test(id)
  },
  {
    input,
    output: [
      {
        file: pkg.module,
        format: "es",
        exports: "default"
      },
      {
        file: pkg.main,
        format: "cjs",
        exports: "auto"
      }
    ],
    plugins: [
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**"
      })
    ],
    external: (id) =>
      /@hook\/hook|axios|lodash|core-js|regenerator-runtime/.test(id)
  }
];
