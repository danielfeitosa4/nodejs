const { difference } = require('lodash')
const _ = require('lodash')

const a = [1,2,3,4,5]
const b = [1,2,3,4,8]

const diff = _.difference(a, b)
console.log(diff)