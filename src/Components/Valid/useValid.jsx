import { useState } from "react";

export const useValid = (ini, type) => {
  const [valid, setValid] = useState(ini);

  const handleChange = (e) => setValid(e.target.value);

  const validateInput = () => {
    switch (type) {
      case "email":
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(valid)) {
          return false;
        }
        return true;
      case "password":
        const passwordRegex = valid.length >= 8;
        if (!passwordRegex) {
           return false;
        }
        return true;
      default:
        break
    }
  };

  return {
    valid,
    handleChange,
    validateInput,
  };
};
