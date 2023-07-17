let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/api", require("./routes/carros"));
// localhost:3000/api/
// app.use("/", require("./routes/carros")) ----> localhost:3000/

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost:3000", host, port);
});