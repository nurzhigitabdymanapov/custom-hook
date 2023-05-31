import { useState, useEffect } from "react";
export const useTimer = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return {
    seconds,
    isActive,
    resetTimer,
    setIsActive
  };
};
