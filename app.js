const http = require("http")
function rqListener (req, res){
    console.log(req.url, req.method, req.headers)
    res.setHeader("content-type", 'text/html')
    res.write("<html>");
    res.write('<head><title>My Fist Page from Server</title></head>')
    res.write('<body><h1>Hello!!!!! Welcome from the Node JS Server</h1></body>')
    res.write('</html>')
    res.end()
}
const server = http.createServer(rqListener);

PORT = 5000
server.listen(PORT,console.log(`Server is listening at Port ${PORT}`));
