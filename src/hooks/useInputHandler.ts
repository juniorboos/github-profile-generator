import { useState } from "react";

interface InputHandlerProps<T> {
  inputs: T[];
  handleInputAdd: () => void;
  handleInputChange: (value: string, idx: number, field: keyof T) => void;
  handleInputRemove: (idx: number) => void;
}

const useInputHandler = <T>(initialState: T): InputHandlerProps<T> => {
  const [inputs, setInputs] = useState([initialState]);

  const handleInputChange = (value: string, idx: number, field: keyof T) => {
    const list: T[] = [...inputs];
    list[idx][field] = value as T[keyof T];
    setInputs(list);
  };

  const handleInputRemove = (idx: number) => {
    const list = [...inputs];
    list.splice(idx, 1);
    setInputs(list);
  };

  const handleInputAdd = () =>
    setInputs((prevInputs) => [...prevInputs, initialState]);

  return {
    inputs,
    handleInputAdd,
    handleInputChange,
    handleInputRemove,
  };
};

export { useInputHandler };
export type { InputHandlerProps };
