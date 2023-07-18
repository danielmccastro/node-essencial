let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({limit: "10mb", extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log("Time: " + Date.now());
    next();
})
app.use("/api", require("./routes/carros"));
// localhost:3000/api/
// app.use("/", require("./routes/carros")) ----> localhost:3000/
app.use("/api/upload", require("./routes/upload"))
app.use(express.static(__dirname + "/view"));

app.get("/teste_erro", (req, res) => {
    throw Error("Erro Ninja");
}); // nao muito amigavel. somente para demonstracao
app.use((req, res, next) => {
    res.status(404);
    res.json({err: "Nao encontrado."})
});
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
    res.json({erro: "Erro na transacao"});
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost:3000", host, port);
});