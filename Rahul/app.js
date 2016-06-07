var http = require('http');
var fs = require('fs');

function request404(response) {
    request.writeHead(404, {"Context-Type": "plain/text"});
    request.write("sorry the page is not available");
    request.end();
}

function onRequest(request, response) {
    if(request.method == "GET" && request.url == "/")
    {
        response.writeHead(200, {"Context-Type":"plain/html"});
        fs.createReadStream("./index.html").pipe(response); // pipe() writes the stream to response object
    }
    else
    {
        request404(response);
    }
}
http.createServer(onRequest).listen(8888);
console.log("server is running....");