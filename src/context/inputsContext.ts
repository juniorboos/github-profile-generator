import { createContext, useContext } from "react";
import { initialInputs } from "./contants";
import { InputsState, Dispatch } from "./types";

export const InputsContext = createContext<InputsState>(initialInputs);
export const InputsDispatchContext = createContext<Dispatch>(() => {});

export const useInputs = () => useContext(InputsContext);
export const useInputsDispatch = () => useContext(InputsDispatchContext);
