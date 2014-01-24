//Estoy medio pendejo entonces aqui podre lo que seria el equivalente
//A mi carpeta de routes en paraiso

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

//Aqui jalo la funcion que tengo en router.js
  server.start(router.route,handle);