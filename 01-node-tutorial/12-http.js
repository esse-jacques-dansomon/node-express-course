const http = require('http');

const server = http.createServer( (req, res)=>{
    // console.log(req)
    if(req.url === '/'){
        res.end("welcome to our home page with nodemon")
    }else if(req.url ==='/about'){
        res.end("welcome to our about page")
    }else{
        res.end(`
        <h1>oops</h1>
        <p>we don't have the ${req.url} ask</p>
        <a href="./">return to home</a>
        
        `)
    }
})

server.listen(8000)