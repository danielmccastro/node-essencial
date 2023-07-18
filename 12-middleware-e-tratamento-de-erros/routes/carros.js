let express = require("express");
let router = express.Router();
const CarroDB = require("../model/CarroDB");

router.get("/carros", (req, res, next) => {
    CarroDB.getCarros((error, carros) => {
        if (error) {
            console.log("Erro de SQL: " + error.message);
            return next(error);
        }
        res.json(carros);
    })
});

router.get("/carros/:id(\\d+)", (req, res) => {
    let id = req.params.id;
    CarroDB.getCarroById(id, (carro) => {
        res.json(carro);
    });
});

router.delete("/carros/:id(\\d+)", (req, res) => {
    let id = req.params.id;
    console.log("Deletar carro " + id);
    CarroDB.deleteById(id, (affectedRows) => {
        res.json({msg: "Carro deletado com sucesso."})
    })
});

router.get("/carros/:tipo", (req, res) => {
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, (carros) => {
        res.json(carros);
    });
});

router.post("/carros", (req, res) => {
    let carro = req.body;
    CarroDB.save(carro, (carro) => {
        res.json(carro);
    });
});

router.put("/carros", (req, res) => {
    let carro = req.body;
    CarroDB.update(carro, (carro) => {
        res.json(carro);
    });
});

module.exports = router;