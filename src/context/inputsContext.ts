import { createContext, useContext } from "react";
import { InputsState, Dispatch } from "./types";

export const InputsContext = createContext<InputsState | null>(null);
export const InputsDispatchContext = createContext<Dispatch>(() => {});

export const useInputs = () => useContext(InputsContext);
export const useInputsDispatch = () => useContext(InputsDispatchContext);
