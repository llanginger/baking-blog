function handleRequest(e,t){try{console.log(e.url),dispatcher.dispatch(e,t)}catch(n){console.log(n)}}var http=require("http"),dispatcher=require("httpdispatcher");const PORT=8080;var server=http.createServer(handleRequest);dispatcher.setStatic("/images/"),dispatcher.onGet("/page1",function(e,t){t.writeHead(200,{"Content-Type":"text/plain"}),t.end("Page One")}),dispatcher.onPost("/post1",function(e,t){t.writeHead(200,{"Content-Type":"text/plain"}),t.end("Got Post Data")}),server.listen(PORT,function(){console.log("Server Listening on: http://localhost:%s",PORT)});