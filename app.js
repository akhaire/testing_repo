const lodash = require('lodash')

const item = [1,[2,[3,4,[5]]]]

const newItem = lodash.flattenDeep(item)

console.log(newItem)