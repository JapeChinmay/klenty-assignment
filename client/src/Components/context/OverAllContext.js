import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api/v1/";

const OverAllContext = createContext();

export const OverAllContextProvider = ({ children }) => {
  const [Incomes, setIncomes] = useState([]);
  const [Expenses, setExpenses] = useState([]);

  //////////////////////////////////////////////////
  const [error, setError] = useState(null);

  ///////////////post add ///////////////////////////////////

  const AddToDataBase = async (Income) => {
    const res = await axios
      .post(`${BASE_URL}add-income-data`, Income)
      .catch((err) => {
        setError(err.response.data.message);
      });

    getIncome();

    console.log("from context, added income");
  };

  const getIncome = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-income-data`);
      setIncomes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    Incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  ///////////////////////////////////////////////////

  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expense-data`);
    setExpenses(response.data);
    console.log(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalExpesne = 0;
    Expenses.forEach((expense) => {
      totalExpesne = totalExpesne + expense.amount;
    });

    return totalIncome;
  };

  return (
    <OverAllContext.Provider
      value={{
        AddToDataBase,
        getIncome,
        Incomes,
        deleteIncome,
        totalIncome,
        addExpense,
        totalExpenses,
        deleteExpense,
        getExpenses,
        Expenses,
      }}
    >
      {children}
    </OverAllContext.Provider>
  );
};

export const useOverallContext = () => {
  return useContext(OverAllContext);
};
