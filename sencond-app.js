const http = require("http")
const routes = require('./routes')

const server = http.createServer( routes);

PORT = 5000
server.listen(PORT,console.log(`Server is listening at Port ${PORT}`));
