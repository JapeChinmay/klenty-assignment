import React, { useEffect } from "react";
import styled from "styled-components";
import {
  OverAllContextProvider,
  useOverallContext,
} from "../context/OverAllContext";
import Forms from "../Forms/Forms";
import { Inner } from "../styles/layout";
import ExpenseForm from "./ExpenseForm";

const ExpensesMain = () => {
  const { totalExpenses, getExpenses, Incomes } = useOverallContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <IncomesStyled>
      <Inner>
        <h1>Expenses</h1>
        <div className="content">
          <div className="form-container">
            <ExpenseForm />
          </div>

          <div className="totalExpense">
            <h3>Total Expenses : ${totalExpenses()}</h3>
          </div>
        </div>
      </Inner>
    </IncomesStyled>
  );
};

const IncomesStyled = styled.div`
  h1 {
    color: var(--primary-color5);
  }

  .totalExpense {
    color: var(--primary-color5);
    margin-top: 2rem;
  }
`;
export default ExpensesMain;
