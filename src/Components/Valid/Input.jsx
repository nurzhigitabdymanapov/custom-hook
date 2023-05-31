import { styled } from "@mui/material";
import { useValid } from "./useValid";

export const Input = ({ type }) => {
  const { valid, validateInput, handleChange } = useValid("", type);

  console.log(validateInput());
  return (
    <>
      <StyledInput
        style={
          validateInput() === false
            ? { backgroundColor: "#f8090975" }
            : { backgroundColor: "#0707f279", color: "#fff" }
        }
        type={type}
        placeholder={type}
        value={valid}
        onChange={handleChange}
      />
    </>
  );
};

const StyledInput = styled("input")(() => ({
  margin: "0 auto",
  width: "300px",
  border: 0,
  margin: "10px",
  height: "30px",
  borderRadius: "10px",
}));

