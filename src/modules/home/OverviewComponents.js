import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 10px;
  font-family: Montserrat;
`;
const BalanceBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: Montserrat;
`;
const AddTransaction = styled.div`
  background: Black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Montserrat';
`;

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  width: 100%;
  gap: 10px;
  padding: 15px 20px;
  margin: 22px;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    boder: 1px solid #e6e8e9;
  }
`;
const RadioBox = styled.div`
display: flex;
flex-direction: row;
width 100%;
align-items: Center;
& input {
    width: unset;
    margin: 0 8px;
}
`;
const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  gap: 12px;
`;
const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  width: 135px;
  font-size: 14px;
  & span {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => (props.isIncome ? 'green' : 'red')};
  }
`;
const AddTransactionView = (props) => {
  const [amount, setAmmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState('EXPENSE');

  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    props.toggleAddtxn();
  };

  return (
    <AddTransactionContainer>
      <input
        placeholder="Ammount"
        value={amount}
        type="number"
        onChange={(e) => setAmmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === 'EXPENSE'}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === 'INCOME'}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
};

const OverviewComponent = (props) => {
  const [isAddtxnVisible, toggleAddtxn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance: ${props.income - props.expense}
        <AddTransaction onClick={() => toggleAddtxn(!isAddtxnVisible)}>
          {isAddtxnVisible ? 'Cancel' : 'ADD'}
        </AddTransaction>
      </BalanceBox>
      {isAddtxnVisible && (
        <AddTransactionView
          toggleAddtxn={toggleAddtxn}
          addTransaction={props.addTransaction}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverviewComponent;
