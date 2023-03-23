import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useOverallContext } from "../context/OverAllContext";
import { calender, comment, dollar, trash } from "../Icons/Icons";
import { Inner } from "../styles/layout";
import moment from "moment";

const ViewIncomes = () => {
  const { getIncome, Incomes, deleteIncome, totalIncome } = useOverallContext();

  useEffect(() => {
    getIncome();
  }, []);

  // const deleteItem = (id) => {
  //   const newList = list.filter((income) => income._id !== id);
  //   SetList(newList);
  //   console.log("new list done");
  // };

  console.log(Incomes);

  return (
    <ViewIncomesStyled>
      <Inner>
        <h2 className="total">
          Total Income : <span>${totalIncome()}</span>
        </h2>
        {Incomes.map((income) => (
          <div key={income._id} className="icon">
            <div className="content">
              <div className="inner-content">
                <h5>{income.title}</h5>
                <div className="text">
                  <p>
                    {dollar}
                    {income.amount}
                  </p>
                  <p>
                    {calender} {moment(income.date).format("DD/MM/YYYY")}
                  </p>
                  <p>
                    {comment}
                    {income.description}
                  </p>
                </div>

                <button onClick={() => deleteIncome(income._id)}>
                  {trash}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Inner>
    </ViewIncomesStyled>
  );
};

const ViewIncomesStyled = styled.div`
  .total {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color5);
    marginbottom: 2rem;
  }
  .icon {
    background: #fcf6f9;

    border-radius: 3rem;
    padding: 0.7rem;
    margin-bottom: 1rem;
    display: flex;

    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: max-content;
    height: 50%;
    color: #222260;

    i {
      font-size: 1rem;
    }
  }

  .inner-content {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h5 {
    font-size: 1.3rem;
    padding-left: 2rem;
    position: relative;
  }

  .inner-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary-color);
        opacity: 0.8;
      }
    }
  }
`;

export default ViewIncomes;
