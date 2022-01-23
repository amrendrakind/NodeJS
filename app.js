const http = require("http")
function rqListener (req, res){

    const url = req.url
    if(url ==='/'){

        res.write("<html>");
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method ="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    
    }

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
