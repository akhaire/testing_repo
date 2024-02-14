const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','succontent','text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname,'constent','subcontent','text.txt')
console.log(absolutePath)