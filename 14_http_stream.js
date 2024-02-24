const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const text = fs.readFileSync('./content/bigfile.txt','utf8');
    res.end(res)
}).listen(5000)