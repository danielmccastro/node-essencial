var http = require("http");
var url = require("url");
const Pessoa = require("./pessoa");

function callback(request, response) {
  var parts = url.parse(request.url);
  var path = parts.path;
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  if (path == "/teste") {
    /* var pessoa = {
      nome: "Ricardo",
      sobrenome: "Lecheta",
    };
    var json = JSON.stringify(pessoa); */
   /*  var pessoas = [];
    var p1 = {
      nome: "Ricardo",
      sobrenome: "Lecheta",
    };
    var p2 = {
      nome: "Steve",
      sobrenome: "Jobs",
    };
    pessoas.push(p1);
    pessoas.push(p2);
    var json = JSON.stringify(pessoas); */
    var pessoas = [];
 /*    var Pessoa = class {
        constructor(nome, sobrenome) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        };
    }; */
    var p1 = new Pessoa("Ricardo", "Lecheta");
    var p2 = new Pessoa("Steve", "Jobs");
    pessoas.push(p1);
    pessoas.push(p2);
    var json = JSON.stringify(pessoas);
    response.end(json);
  } else {
    response.end("Not found: " + path);
  }
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");
