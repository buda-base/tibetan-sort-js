import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
  // ESM + CJS
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/index.mjs', format: 'esm', sourcemap: true },
      { file: 'dist/index.cjs', format: 'cjs', exports: 'named', sourcemap: true }
    ],
    plugins: [resolve(), commonjs()]
  },
  // UMD (browser)
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'TibetanSort',
      exports: 'named',
      sourcemap: true
    },
    plugins: [resolve(), commonjs(), terser()]
  }
];