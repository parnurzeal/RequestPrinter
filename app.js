var http = require("http");

http.createServer(function(request, response){
      console.log(request);
      response.writeHeader(200, {"Content-Type": "text/plain"});
      response.write("Hello World!");
      response.end();
    }).listen(1337);

