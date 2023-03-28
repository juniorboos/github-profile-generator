import { ReactNode, useReducer } from "react";
import { usePersistance } from "../hooks/usePersistance";
import { initialState } from "./contants";
import { InputsContext, InputsDispatchContext } from "./inputsContext";
import { inputsReducer } from "./reducer";

interface InputsProviderProps {
  children: ReactNode;
}

export const InputsProvider = ({ children }: InputsProviderProps) => {
  const [state, dispatch] = useReducer(inputsReducer, initialState);
  usePersistance(state, dispatch);

  return (
    <InputsContext.Provider value={state}>
      <InputsDispatchContext.Provider value={dispatch}>
        {children}
      </InputsDispatchContext.Provider>
    </InputsContext.Provider>
  );
};
