var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	// A constante __dirname retorna o diretório raiz da aplicação.
	var fileHtml = "/artigos.html";
	if(request.url == '/contatos')
		fileHtml = '/contatos.html';
	else if(request.url != '/' && request.url != '/artigos')
		fileHtml = '/erro.html';
		
	fs.readFile(__dirname + fileHtml, function(err, html){
		response.writeHeader(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	});
});
server.listen(3000, function(){
	console.log('Executando Site Artigos');
});