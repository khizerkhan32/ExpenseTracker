import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Montserrat;
  padding: 10px 22px;
  font-size: 18px;
  width: 50%;
  gap: 10px;
  font-weight: 700;
  & input {
    padding: 10px 12px;
    border-radius: 10px;
    background: #e6e8e9;
    outline: none;
    width: 100%;
  }
`;
const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  align-items: center;
  font-weight: 400;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #e6e8e9;
  border-right: 4px solid ${(props) => (props.isExpense ? 'red ' : 'green')};
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type == 'EXPENSE'}>
      <span>{props.payload.desc}</span>
      <span>${props.payload.amount}</span>
    </Cell>
  );
};

const TranscationComponent = (props) => {
  const [SearchText, updateSearchText] = useState('');

  const [filteredTransaction, updatetxn] = useState(props.transactions);

  const filterData = (SearchText) => {
    if (!SearchText || !SearchText.trim().length) {
      updatetxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(SearchText.toLowerCase().trim())
    );
    updatetxn(txn);
  };

  useEffect(() => filterData(SearchText), [props.transactions]);

  return (
    <Container>
      Transcations{' '}
      <input
        placeholder="Search"
        value={SearchText}
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.length
        ? filteredTransaction.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ''}
    </Container>
  );
};

export default TranscationComponent;
