const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: './src/index.js',
  output: {
    format: 'umd',
    name: 'Hey',
    file: 'dist/hey.umd.js',
    globals: {
      // 外部导入
      lodash: '_'
    }
  },

  // 排除打包
  external: ['lodash'],
  plugins: [
    commonjs(),
    nodeResolve(),

    // https://github.com/rollup/plugins/tree/master/packages/babel#using-with-rollupplugin-commonjs
    babel({ babelHelpers: 'bundled', exclude: /node_modules/ }),
    // terser(),
    postcss()
  ]
}