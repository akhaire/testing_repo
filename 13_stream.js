const {createReadStream} = require('fs')
const stream = createReadStream('./content/bigfile.txt',{highWaterMark:90000})

//By default 64kb data come in chunks
//last buffer - remainder
//highWaterMark - control size
// const stream = createReadStream('./content/bigfile.txt',{highWaterMark:90000})
// const stream = createReadStream('../content/bigfile.txt',{encoding:'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})


stream.on('error',(err)=>{
    console.log(err)
})

