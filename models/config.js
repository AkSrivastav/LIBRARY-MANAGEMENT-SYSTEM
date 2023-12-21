var mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

module.exports = {
  executeQuery: function (sql, sqlParam, callback) {
    if (sqlParam == null) {
      connection.query(sql, function (error, result) {
        if (error) {
          console.log(error);
        }
        callback(result);
      });
    } else {
      connection.query(sql, sqlParam, function (error, result) {
        if (error) {
          console.log(error);
        }
        callback(result);
      });
    }
  },
};
