/**
 * 
 * @param {*} req Metodo util que permite extraer parametros de URL
 * @returns Parametros de URL como un objeto
 */
function parametrosUrl(req) {
    // Si la URL contiene el simbolo ? significa que vienen parametros de URL
    console.log(req.url.indexOf("?"));
    var urlData = req.url.split("?");
    if(urlData.length < 2) {
        return {};
    }

    arregloParametros = urlData[1].split("&");
    var parametros = {};
    for(var i = 0; i < arregloParametros.length; i++) {
        var datos = arregloParametros[i].split("=");
        var nombre = datos[0];
        var dato = datos[1];
        parametros[nombre] = dato;
    }
    return parametros;
}
module.exports.parametrosUrl = parametrosUrl;