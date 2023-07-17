/* var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "livro",
  password: "livro123",
  database: "livro",
});
connection.connect();
let sql = "select id,nome,tipo from carro";
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  let carros = results;
  carros.map(c => console.log(c.id + ": " + c.nome));
});
connection.end(); */

const CarroDB = require("./CarroDB");
CarroDB.getCarros(function(carros) {
  carros.map(c => console.log(c.id + ": " + c.nome));
})