import styled from 'styled-components';
import HomeComponent from './modules/home';

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px;
  font-family: Montserrat;
`;

const Header = styled.span`
  font-size: 25px;
  color: black;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;
