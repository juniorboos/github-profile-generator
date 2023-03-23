import { ReactNode, useReducer } from "react";
import { initialState } from "./contants";
import { InputsContext, InputsDispatchContext } from "./inputsContext";
import { inputsReducer } from "./reducer";

interface InputsProviderProps {
  children: ReactNode;
}

export const InputsProvider = ({ children }: InputsProviderProps) => {
  const [state, dispatch] = useReducer(inputsReducer, initialState);

  return (
    <InputsContext.Provider value={state}>
      <InputsDispatchContext.Provider value={dispatch}>
        {children}
      </InputsDispatchContext.Provider>
    </InputsContext.Provider>
  );
};
