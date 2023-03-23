import React from "react";
import styled from "styled-components";
import { Inner } from "../styles/layout";
import Chart from "../Chart/Chart";
import { useOverallContext } from "../context/OverAllContext";

const DashboardMain = () => {
  return (
    <DashboardStlyed>
      <Inner>
        <h1>All Movements</h1>

        <div className="stats">
          <div className="chart">
            <Chart />
          </div>
        </div>
      </Inner>
    </DashboardStlyed>
  );
};

const DashboardStlyed = styled.div`
  h1 {
    color: var(--primary-color5);
  }
  h3 {
    color: var(--primary-color5);
  }
`;

export default DashboardMain;
