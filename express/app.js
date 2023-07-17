let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.status(500).json({msg: 'Ops, nao foi possivel atender essa requisicao.'})
});

app.get("/pessoa", function(req, res) {
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.status(200).type("text");
    res.send(nome + " " + sobrenome);
});

app.get("/pessoa/:id", function(req, res) {
    let id = req.params.id;
    res.send("Buscar a pessoa: " + id);
});

app.get("/pessoa/nome/:nome/sobrenome/:sobrenome", function(req, res) {
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;
    res.send(nome + " " + sobrenome);
});

app.post("/pessoa", function (req, res) {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    res.send(nome + " " + sobrenome);
    if (req.is("json")) {
        res.json({nome: nome, sobrenome: sobrenome});
    } else {
        res.type("text").send("Texto: " + nome + " " + sobrenome);
    }
})

let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost:3000", host, port)
});