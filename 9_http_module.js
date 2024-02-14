const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our first page')
    }
    else if (req.url === '/about') {
        res.end('Here is about our history')
    }else{
        res.end(`
        <h1>Opps!</h1>
        <p>Somthing went wron</p>
        <a href='/'>back to home</a>
        <a href='/about'>About page</a>
        `)
    }

})


server.listen(5000)