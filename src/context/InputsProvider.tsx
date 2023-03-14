import { ReactNode, useReducer } from "react";
import { initialInputs } from "./contants";
import { InputsContext, InputsDispatchContext } from "./inputsContext";
import { inputsReducer } from "./reducer";

interface InputsProviderProps {
  children: ReactNode;
}

export const InputsProvider = ({ children }: InputsProviderProps) => {
  const [inputs, dispatch] = useReducer(inputsReducer, initialInputs);

  return (
    <InputsContext.Provider value={inputs}>
      <InputsDispatchContext.Provider value={dispatch}>
        {children}
      </InputsDispatchContext.Provider>
    </InputsContext.Provider>
  );
};
