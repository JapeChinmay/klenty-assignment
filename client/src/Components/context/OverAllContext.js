import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api/v1/";

const OverAllContext = createContext();

export const OverAllContextProvider = ({ children }) => {
  const [Incomes, setIncomes] = useState([]);
  const [Expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const AddToDataBase = async (Income) => {
    try {
      const res = await axios.post(`${BASE_URL}add-income-data`, Income);
      getIncome();
      console.log("from context, added income");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getIncome = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-income-data`);
      setIncomes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  const deleteIncome = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
      getIncome();
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  const totalIncome = () => {
    let totalIncome = 0;
    Incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  const addExpense = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-expense`, income);
      getExpenses();
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-expense-data`);
      setExpenses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
      getExpenses();
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
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
        error,
      }}
    >
      {children}
    </OverAllContext.Provider>
  );
};

export const useOverallContext = () => {
  return useContext(OverAllContext);
};
