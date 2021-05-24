var http = require("http");
var fs = require("fs");

fs.readFile("./index.html", (err, html) => {
    http.createServer((req, res) => {
        res.write(html);
        res.end();
    }).listen(4000);
});

