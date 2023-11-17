const { DataTypes } = require("sequelize");
const {sequelize} = require("../db-connection");

const Customer = sequelize.define("Customer", {
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
   type: DataTypes.STRING,
   allowNull:false
  },
  last_name:{
    type: DataTypes.STRING,
    allowNull:false
  }, 
  phone_number: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  monthly_salary: {
    type: DataTypes.FLOAT,
  },
  approved_limit: {
    type: DataTypes.FLOAT,
  },
  current_debt: {
   type: DataTypes.FLOAT,
  }
});

module.exports = {Customer};
