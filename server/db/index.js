const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: "example",
  database: "miricyl",
  host: "localhost",
  port: "3306",
});

let miricyldb = {};

miricyldb.tags = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM tags`, (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

miricyldb.charities = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM charities`, (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

miricyldb.charitySelect = (tags) => {
  let finalResults = [];
  let finalTags = [];
  let splitTags = tags.split(",");
  splitTags.forEach((tag) => {
    finalTags.push(tag);
  });
  console.log("finalTags", finalTags);

  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM charities WHERE tags IN (?)`,
      [finalTags],
      (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      }
    );
  });
};

module.exports = miricyldb;
