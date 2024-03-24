const http = require('http')

const {readFileSync} = require('fs')

//get all file 
const navBar = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{
    // console.log(req.method)
    console.log(req.url)

    const url = req.url
    //home page
    if(url == '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(navBar)
        res.end()
    }
    //about page
    else if(url == '/about'){  
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }
    //Styles css
    else if(url == '/styles.css'){  
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
      //logo / image
      else if(url == '/logo.svg'){  
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    //toggle file
    else if(url == '/browser-app.js'){  
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    //page not found
    else{
       res.writeHead(404,{'content-type':'text/html'})
       res.write('<h1>Page not found</h1>')
       res.end()
    }

    
})

server.listen(5000)