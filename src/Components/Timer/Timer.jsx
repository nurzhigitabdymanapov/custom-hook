import React from "react";
import { useTimer } from "./useTimer";
import { styled } from "styled-components";

export const Timer = () => {
  const initialSeconds = 60;
  const { seconds, isActive, setIsActive, resetTimer } =
    useTimer(initialSeconds);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Container>
      <h1>Timer</h1>
      <h2>{formatTime(seconds)}</h2>
      <div>
        <button onClick={() => setIsActive(true)} disabled={isActive}>
          Start
        </button>
        <button onClick={() => setIsActive(false)} disabled={!isActive}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  background-color: #0707f2;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 12px;
  margin: 20px auto;
  line-height: 50px;
  color: #fff;
  margin-top: 150px;

  div {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    button {
      height: 40px;
      font-size: 20px;
      border: 0;
      border-radius: 8px;
      background-color: #ffffff;
      font-size: 20px;
      font-weight: 800;
      width: 100px;
    }
  }
`;
