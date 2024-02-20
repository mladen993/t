const htpp = require('http')

const server = htpp.createServer((req,res)=> {
    if(req.url === '/'){
        res.end('Welcome to out homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end("RRR")
          
})

server.listen(5000)