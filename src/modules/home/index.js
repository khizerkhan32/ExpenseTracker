import styled from 'styled-components';
import OverviewComponent from './OverviewComponents';
import TranscationComponent from './Transactioncomponent';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
  font-family: Montserrat;
`;

const HomeComponent = (props) => {
  const [transactions, updatetransactions] = useState([]);
  const [expense, updateExpense] = useState([0]);
  const [income, updateIncome] = useState([0]);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updatetransactions(transactionArray);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) => {
      payload.type === 'EXPENSE'
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transactions]);

  return (
    <Container>
      <OverviewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TranscationComponent transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
