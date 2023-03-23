import React, { useEffect } from "react";
import moment from "moment";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useOverallContext } from "../context/OverAllContext";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const { Expenses, Incomes, getExpenses, getIncome } = useOverallContext();
  console.log(Expenses, Incomes);

  useEffect(() => {
    getExpenses();
    getIncome();
  }, []);

  console.log();

  if (Expenses.length === 0 || Incomes.length === 0) {
    return <div>Loading..</div>;
  }

  const data = {
    labels: Incomes.map((inc) => {
      const { date } = inc;
      return `${moment(date).format("DD/YYYY")}`;
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...Incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        pointBackgroundColor: "white",

        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...Expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        pointBackgroundColor: "white",
        tension: 0.3,
      },
    ],
  };
  return (
    <chartStyled>
      <Line data={data} />
    </chartStyled>
  );
};

const chartStyled = styled.div`
  padding: 1rem;
  height: 100%;
  background-color: white;
`;

export default Chart;
