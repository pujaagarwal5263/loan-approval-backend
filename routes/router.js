const express = require("express");
const router = express.Router();
const {
  register,
  checkEligibility,
  createLoan,
  viewLoan,
  makePayment,
  viewStatement,
} = require("../controllers/controller");

router.post("/register", register);
router.post("/check-eligibility", checkEligibility);
router.post("/create-loan", createLoan);
router.get("/view-loan/:loan_id", viewLoan);
router.post("/make-payment/:customer_id/:loan_id", makePayment);
router.get("/view-statement/:customer_id/:loan_id", viewStatement);

module.exports = router;
