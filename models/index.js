const {Customer} = require("./Customer");
const {Loan} = require("./Loan");

Customer.hasMany(Loan, { foreignKey: "customer_id"});
Loan.belongsTo(Customer, { foreignKey: "customer_id"});