const http=require('http');
const port=8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hallo DRV!');
    console.log(`Answered request from ${req.headers.host} for ${req.url}`);
});

server.listen(8080, ()=>{
    console.log(`Server running on ${port}`);
});

module.exports = server;