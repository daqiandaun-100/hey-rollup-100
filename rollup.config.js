const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');

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
    nodeResolve()
  ]
}