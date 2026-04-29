const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello Lavanya DevOps this is a webhook practise 🚀");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
