import { sum, mul } from "./util"

// @rollup/plugin-commonjs
import { formatPrice } from './service'

// @rollup/plugin-node-resolve
import _ from 'lodash'

function sayHello(){
  console.log(sum(1, 2))
  console.log(mul(2,3))
  console.log(formatPrice())
  console.log(_.join(['abc', 'cba']))

  const message = "Hello World";
  console.log(message)
}


export { sayHello }