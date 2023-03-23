import styled from "styled-components";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import { MainLayout } from "./Components/styles/layout";
import React, { useState } from "react";
import DashboardMain from "./Components/Dashboard/Dashboard";
import IncomesMain from "./Components/Incomes/Incomes";
import ExpensesMain from "./Components/Expenses/Expenses";
import { useOverallContext } from "./Components/context/OverAllContext";
import ViewIncomes from "./Components/ViewIcomes/ViewIncomes";

function App() {
  const [active, setActive] = useState(1);
  console.log(active);

  const overAllContext = useOverallContext();
  console.log(overAllContext);

  return (
    <AppStyle className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <div className="main">
          {active === 1 && <DashboardMain />}

          {active === 2 && <IncomesMain />}
          {active === 3 && <ViewIncomes />}
          {active === 4 && <ExpensesMain />}
          {active !== 1 && active !== 2 && active !== 3 && active !== 4 && (
            <DashboardMain />
          )}
        </div>
      </MainLayout>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
    to right top,
    #021d46,
    #093f6e,
    #136595,
    #228dbc,
    #38b7e0
  );

  .main {
    flex: 1;
    background-image: linear-gradient(
      to right top,
      #021d46,
      #093f6e,
      #136595,
      #228dbc,
      #38b7e0
    );
    drop-filter: opacity(50%);
    border-radius: 20px;
  }
`;

export default App;
