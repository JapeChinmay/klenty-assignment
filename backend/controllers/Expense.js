const ExpenseSchema = require("../models/ExpenseModel");

const moment = require("moment");

exports.addExpense = async (req, res) => {
  console.log(req.body);

  const { title, amount, category, description, date, type } = req.body;
  const parsedDate = date;
  const newDate = moment(parsedDate, "DD-MM-YYYY").toDate();
  const expense = ExpenseSchema({
    title,
    amount,
    type,
    category,
    description,
    date: newDate,
  });

  try {
    if (!title || !category || !date || !description) {
      return res.status(400).json({ error: "All Fields are not fullfiled" });
    }

    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ error: "Enter valid amount" });
    }

    await expense.save();
    res.status(200).json({ message: "saved " });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ mesage: err });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);

  await ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "expense deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.findExpense = async (req, res) => {
  const { id } = req.params;

  await ExpenseSchema.findById(id)
    .then((expense) => {
      if (!expense) {
        res.status(404).json({ message: "not found" });
      } else {
        res.json(expense);
      }
    })
    .catch((err) => {
      res.status(500).json({ mesage: err });
    });
};
