let express = require("express");
let app = express();
app.get("/", (req, res) => {
res.send("API dos Carros");
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost:3000", host, port);
});