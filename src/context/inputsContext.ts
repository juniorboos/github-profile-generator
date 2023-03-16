import { createContext, useContext, Dispatch } from "react";
import { initialInputs } from "./contants";
import { InputsState, Action } from "./types";

export const InputsContext = createContext<InputsState>(initialInputs);
export const InputsDispatchContext = createContext<Dispatch<Action>>(() => {});

export const useInputs = () => useContext(InputsContext);
export const useInputsDispatch = () => useContext(InputsDispatchContext);
