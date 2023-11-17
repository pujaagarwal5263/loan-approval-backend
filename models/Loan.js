const { DataTypes } = require("sequelize");
const {sequelize} = require("../db-connection");

const Loan = sequelize.define("Loan", {
  loan_id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  loan_amount: {
    type: DataTypes.FLOAT,
    allowNull:false
  },
  tenure: {
    type: DataTypes.INTEGER,
  },
  interest_rate: {
    type: DataTypes.FLOAT,
  },
  monthly_payment: {
    type: DataTypes.FLOAT,
  },
  EMIs_paid_on_Time: {
    type: DataTypes.INTEGER,
  },
  start_date: {
    type: DataTypes.DATEONLY,
  },
  end_date: {
    type: DataTypes.DATEONLY,
  },
});

module.exports = {Loan};
