const IncomeSchema = require("../models/IncomeModel");
const moment = require("moment");

exports.addIncome = async (req, res) => {
  console.log(req.body);

  const { title, amount, category, description, date, type } = req.body;
  const parsedDate = date;
  const newDate = moment(parsedDate, "DD-MM-YYYY").toDate();
  const income = IncomeSchema({
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

    await income.save();
    res.status(200).json({ message: "saved " });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

exports.getIncome = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find();
    res.status(200).json(incomes);
  } catch (err) {
    res.status(500).json({ mesage: err });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);

  await IncomeSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "income deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.findIncome = async (req, res) => {
  const { id } = req.params;

  await IncomeSchema.findById(id)
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
