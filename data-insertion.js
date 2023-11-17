const xlsx = require("xlsx");
const  {Customer}  = require("./models/Customer");
const {Loan} = require("./models/Loan");
const path = require("path");

async function insertData(customerData, loanData) {
  const customers = await Customer.bulkCreate(customerData, {
    returning: true,
  });
  for (const customer of customers) {
    const currentDebt = loanData
      .filter((loan) => loan.customer_id === customer.customer_id)
      .reduce((sum, loan) => sum + loan.loan_amount, 0);

    await customer.update({ current_debt: currentDebt });
  }

  await Loan.bulkCreate(loanData);
  console.log("Data inserted successfully");
}

async function readCustomFile(filePath) {
  const data = xlsx.readFile(filePath, { cellDates: true });
  const sheet = data.Sheets[data.SheetNames[0]];
  return xlsx.utils.sheet_to_json(sheet);
}

async function dataCompose() {
  try {
    const customerData = await readCustomFile(
      path.join(__dirname, ".", "data", "customer_data.xlsx")
    );
    const loanData = await readCustomFile(
      path.join(__dirname, ".", "data", "loan_data.xlsx")
    );

    await insertData(customerData, loanData);
  } catch (error) {
    console.error(error);
  }
}

dataCompose();
