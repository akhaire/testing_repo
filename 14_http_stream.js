const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const text = fs.readFileSync('./content/bigfile.txt','utf8');
    res.end(res)
}).listen(5000)




// const http = require('http')
// const {fs, createReadStream} = require('fs')


// http.createServer(function(req,res){
//     // const text = fs.readFileSync('./content/bigfile.txt','utf8');
//     // res.end(text)
//     const filestream = createReadStream('./content/bigfile.txt','utf8')
//     filestream.on('open',()=>{
//         filestream.pipe(res)
//     })

//     filestream.on('error',(err)=>{
//         res.end(err)

//     })
// }).listen(5000)