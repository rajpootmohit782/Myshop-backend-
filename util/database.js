// const mysql = require("mysql");
// const util = require("util");

// const pool = mysql.createPool({
//   host: "db4free.net",
//   user: "rajpootmohit782",
//   password: "singhmohit",
//   database: "shopback",
// });

// // Promisify the pool
// pool.query = util.promisify(pool.query);

// module.exports = pool;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("shopback", "rajpootmohit782", "singhmohit", {
  dialect: "mysql",
  host: "db4free.net",
});

module.exports = sequelize;
