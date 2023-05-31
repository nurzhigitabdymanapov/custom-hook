import {useState} from "react";

export const useCounter = () => {
    const [count,setCount] = useState(0)

    const increment = (number) => {
        setCount((prev) => prev + number)
    }
    const decrement = (number) => {
        setCount( count > 0 ? (prev) => prev - number : 0)
    }
    const reset = () => {
        setCount((prev) => prev = 0)
    }
    return {
        increment,
        decrement,
        count,
        reset
    }
}
