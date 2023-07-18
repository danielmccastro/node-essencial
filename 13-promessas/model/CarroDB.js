var mysql = require("mysql2");

class CarroDB {
  static connect() {
    var connection = mysql.createConnection({
      host: "localhost",
      user: "livro",
      password: "livro123",
      database: "livro",
    });
    connection.connect();
    return connection;
  }
  static getCarros() {
    return new Promise((resolve, reject) => {
      let connection = CarroDB.connect();
      let sql = "select * from carro";
      let query = connection.query(sql, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
      connection.end();
    });
  }
  static getCarrosByTipo(tipo, callback) {
    return new Promise((resolve, reject) => {
      let connection = CarroDB.connect();
      let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
      let query = connection.query(sql, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
      connection.end();
    });
  }
  static getCarroById(id) {
    return new Promise((resolve, reject) => {
      let connection = CarroDB.connect();
      let sql = "select * from carro where id=?";
      let query = connection.query(sql, id, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          if (results.length === 0) {
            reject(Error("Nenhum carro encontrado."));
            return;
          }
          let carro = results[0];
          resolve(carro);
        }
      });
      connection.end();
    });
  }
  static save(carro) {
    return new Promise((resolve, reject) => {
      let connection = CarroDB.connect();
      let sql = "insert into carro set ?";
      connection.query(sql, carro, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          carro.id = results.insertId;
          resolve(carro);
        }
      });
      connection.end();
    });
  }
  static update(carro) {
    return new Promise((resolve, reject) => {
      let connection = CarroDB.connect();
      let sql = "update carro set ? where id = ?";
      let id = carro.id;
      connection.query(sql, [carro, id], function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(carro);
        }
      });
      connection.end();
    });
  }
  static delete(carro) {
    return new Promise((resolve, reject) => {
      let connection = CarroDB.connect();
      let sql = "delete from carro where id = ?";
      let id = carro.id;
      connection.query(sql, id, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(carro);
        }
      });
      connection.end();
    });
  }
  static deleteById(id) {
    return new Promise((resolve, reject) => {
      let connection = CarroDB.connect();
      let sql = "delete from carro where id = ?";
      connection.query(sql, id, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
      connection.end();
    });
  }
}

module.exports = CarroDB;
