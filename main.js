const http = require("http") //call http module to host website
const server = http.createServer() // create server with http module
const fs = require("fs")
const path = require("path")

server.on("request", (req,res)=>{
    if(req.url === "/"){
        fs.readFile("./index.html", (err, data)=>{
            res.end(data)
        })
    }else if(req.url === "/joe"){
        fs.readFile("./puz2.html", (err, data)=>{
            res.end(data)
        })
    }else if(req.url === "/seven"){
        fs.readFile("./puz3.html", (err, data)=>{
            res.end(data)
        })
    }else if(req.url === "/mother"){
        fs.readFile("./puz4.html", (err, data)=>{
            res.end(data)
        })
    }else if(req.url === "/son"){
        fs.readFile("./puz5.html", (err, data)=>{
            res.end(data)
        })
    }else if(req.url === "/widen"){
        fs.readFile("./puz6.html", (err, data)=>{
            res.end(data)
        })
    }else if(req.url === "/short"){
        fs.readFile("./final.html", (err, data)=>{
            res.end(data)
        })
    }
})

server.listen(5001, err=>{
    if(err){
        console.error(err)
    }
    console.log("Server active on 5001")
})