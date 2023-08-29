const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res)=> {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('This is Home Page')
        res.end()
    }else if(req.url == '/about') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('This is about Page')
        res.end()

    }else if(req.url == '/contact') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('This is contact Page')
        res.end()
    }else if(req.url == '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err)=>{
            if(err) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write('file write fail')
                res.end()
            }else{
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write('file write success')
                res.end()
            }
        
        })
        
    }
})

const PORT = 3000

server.listen(PORT, ()=>{
    console.log(`Server  running on port ${PORT}`)
})