var http = require("http");
var url = require("url");

function start(route,handle){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;

    //Comprobando lugar de donde voy a guardar todo
    console.log("Request for " + pathname + " received.");
    route(handle,pathname, response, request);
  }
  http.createServer(onRequest).listen(9999);
  console.log("Server de Lio ONLINE");
}

exports.start = start;