var http = require('http')

var server = http.createServer(function(request, response){
    // http status code.  200 = OK
    // headers are basically 'the outside of the envelope'
    console.log(request.query)
    response.writeHead(200, { 'Content-Type' : 'text/html' })

    response.end('<h1>hello world</h1>')
})

server.listen(2345)