const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/yoyo') { res.end("Nice"); }
    res.end("Hey there");
})

server.listen(7070);
