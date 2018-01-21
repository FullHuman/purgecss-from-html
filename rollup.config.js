import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"

export default {
    input: "index.js",
    output: [
        {
            file: "lib/purgehtml.es.js",
            format: "es"
        },
        {
            file: "lib/purgehtml.js",
            format: "cjs"
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel()
    ],
    external: ["parse5"]
}
