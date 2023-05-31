import { useCounter } from "./useCounter";
import styled from "styled-components";

export const Counter = () => {
  const { increment, decrement, reset, count } = useCounter();
  return (
    <Container>
      <div>
        <h1>{count}</h1>
        <div>
          <button onClick={() => increment(4)}>+</button>
          <button onClick={() => decrement(2)}>-</button>
        </div>
      </div>
      <button onClick={reset}>RESET</button>
    </Container>
  );
};
const Container = styled.div`
  background-color: #0707f2;
  color: #fff;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border: 2px solid gray;
  border-radius: 12px;
  text-align: center;
  line-height: 60px;
  margin-top: 150px;

  button {
    width: 160px;
    height: 40px;
    font-size: 20px;
    border: 0;
    border-radius: 10px;
    background-color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
  }
  div {
    h1 {
      font-size: 40px;
    }
    div {
      display: flex;
      gap: 20px;
      button {
        width: 70px;
        height: 40px;
        border: 0;
        border-radius: 10px;
        background-color: #ffffff;
        font-size: 25px;
        font-weight: 800;
        &:active {
          background-color: #c4caeb;
        }
      }
    }
  }
`;
