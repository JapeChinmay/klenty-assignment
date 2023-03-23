import React, { useEffect } from "react";
import styled from "styled-components";
import {
  OverAllContextProvider,
  useOverallContext,
} from "../context/OverAllContext";
import Forms from "../Forms/Forms";
import { Inner } from "../styles/layout";

const IncomeMain = () => {
  const { AddToDataBase, getIncome, Incomes } = useOverallContext();

  useEffect(() => {
    getIncome();
  }, []);

  return (
    <IncomesStyled>
      <Inner>
        <h1>Incomes</h1>
        <div className="content">
          <div className="form-container">
            <Forms />
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
`;
export default IncomeMain;
