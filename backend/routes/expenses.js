const {
  addIncome,
  deleteIncome,
  findIncome,
  getIncome,
} = require("../controllers/Income");
const {
  addExpense,
  getExpense,
  deleteExpense,
  findExpense,
} = require("../controllers/Expense");

const router = require("express").Router();

////incomes////

router.post("/add-income-data", addIncome);
router.get("/get-income-data", getIncome);
router.delete("/delete-income/:id", deleteIncome);
router.get("/find-income/:id", findIncome);

/////////////////////////////////////////////
///expenses///

router.post("/add-expense", addExpense);
router.get("/get-expense-data", getExpense);
router.delete("/delete-expense/:id", deleteExpense);
router.get("find-expense-data", findExpense);

module.exports = router;
