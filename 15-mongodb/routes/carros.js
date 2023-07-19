let express = require("express");
let router = express.Router();
const CarroDB = require("../model/CarroDB");
const exec = require("./utils");

router.get(
  "/carros",
  exec(async (req, res, next) => {
    let carros = await CarroDB.getCarros();
    res.json(carros);
  })
);

router.get(
  "/carros/:id",
  exec(async (req, res, next) => {
    let id = req.params.id;
    let carro = await CarroDB.getCarroById(id);
    res.json(carro);
  })
);

router.delete(
  "/carros/:id",
  exec(async (req, res, next) => {
    let id = req.params.id;
    console.log("Deletar carro " + id);
    let affectedRows = await CarroDB.deleteById(id);
    res.json({
      msg:
        affectedRows > 0
          ? "Carro deletado com sucesso."
          : "Nenhum carro excluido.",
    });
  })
);

router.get(
  "/carros/:tipo",
  exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
  })
);

router.post(
  "/carros",
  exec(async (req, res, next) => {
    let carro = await CarroDB.save(req.body);
    res.json(carro);
  })
);

router.put(
  "/carros",
  exec(async (req, res, next) => {
    let carro = await CarroDB.update(req.body);
    res.json({ msg: "Carro atualizado com sucesso." });
  })
);

module.exports = router;
