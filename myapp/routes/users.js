var express = require("express");
var router = express.Router();

// sequelizeの設定を追加
const { Sequelize } = require("sequelize");
// databaseやuser, passwordをdcoker-compose.ymlで設定したものを使う↓
const sequelize = new Sequelize("my_mysql_db", "root", "root", {
  host: "my_mysql",
  dialect: "mysql",
});

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  res.send("respond with a resource");
});

module.exports = router;
