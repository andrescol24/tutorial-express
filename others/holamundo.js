var http = require("http");
var util = require("./utiles.js");

var servidor = http.createServer((req, res) => {
    var parametros = util.parametrosUrl(req);
    res.end("Hola mundo desde Node.Js " + JSON.stringify(parametros));
});
servidor.listen(4000);