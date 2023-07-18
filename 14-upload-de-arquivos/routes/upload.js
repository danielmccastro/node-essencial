let express = require("express");
const router = express.Router();
const exec = require("./utils");
let fs = require("fs");

router.post("/upload", exec(async (req, res, next) => {
    let fileName = req.body.fileName;
    let Base64 = req.body.Base64;
    let buf = Buffer.from(Base64, "Base64");
    fs.writeFile("./fotos/"+fileName, buf, "binary", function(err) {
        if(err) {
            next(err);
            res.json({msg: "Erro ao salvar o arquivo."})
        } else {
            res.json({msg: "Arquivo salvo com sucesso."})
        }
    });
}));

module.exports = router;