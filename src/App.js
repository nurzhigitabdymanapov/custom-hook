import { styled } from "styled-components";
import "./App.css";
import { Counter } from "./Components/Counter/Counter";
import { Timer } from "./Components/Timer/Timer";
import { Input } from "./Components/Valid/Input";

function App() {
  return (
    <ContainerHan>
      <Counter />
      <Container>
        <h1>Form</h1>
        <Input type="email" />
        <Input type="password" />
      </Container>
      <Timer />
    </ContainerHan>
  );
}

export default App;
const ContainerHan = styled.div`
display: flex;
`
const Container = styled.div`
  background-color:violet;
  margin: 0 auto;
  width: 500px;
  height: 300px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 70px;
  margin-top: 50px;
  
`;
