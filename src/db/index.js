import mysql from "mysql";
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "pweb",
});

export function query(query, callback) {
  return new Promise(function (resolve, reject) {
    pool.query(query, function (error, results, fields) {
      if (error) return reject(error);
      resolve(results);
    });
  });
}
