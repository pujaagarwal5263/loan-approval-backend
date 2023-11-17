const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST,
  logging: false
});

const db = sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  sequelize,
  db
};