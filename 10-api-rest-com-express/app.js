let express = require("express");
let app = express();
const CarroDB = require("./CarroDB");
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
res.send("API dos Carros");
});

app.get("/carros", (req, res) => {
    CarroDB.getCarros((carros) => {
        res.json(carros);
    })
});

app.get("/carros/:id(\\d+)", (req, res) => {
    let id = req.params.id;
    CarroDB.getCarroById(id, (carro) => {
        res.json(carro);
    });
});

app.delete("/carros/:id(\\d+)", (req, res) => {
    let id = req.params.id;
    console.log("Deletar carro " + id);
    CarroDB.deleteById(id, (affectedRows) => {
        res.json({msg: "Carro deletado com sucesso."})
    })
});

app.get("/carros/:tipo", (req, res) => {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, (carros) => {
        res.json(carros);
    });
});

app.post("/carros", (req, res) => {
    let carro = req.body;
    CarroDB.save(carro, (carro) => {
        res.json(carro);
    });
});

app.put("/carros", (req, res) => {
    let carro = req.body;
    CarroDB.update(carro, (carro) => {
        res.json(carro);
    });
});

let server = app.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost:3000", host, port);
});