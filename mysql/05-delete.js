/* var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "livro",
  password: "livro123",
  database: "livro",
});
connection.connect();

let sql = "delete from carro where id = ?";
let id = 31;
connection.query(sql, id, function (error, results, fields) {
  if (error) throw error;
  console.log("Carro deletado com sucesso!");
  console.log("Quantidade de registros atualizados: " + results.affectedRows);
});
connection.end(); */

const CarroDB = require("./CarroDB");
var carro = {id: 31};
CarroDB.delete(carro, function(carro) {
  console.log("Carro deletado: " + carro.id);
})