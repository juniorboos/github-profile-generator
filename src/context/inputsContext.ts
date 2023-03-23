import { createContext, useContext, Dispatch } from "react";
import { initialState } from "./contants";
import { Action, State } from "./types";

export const InputsContext = createContext<State>(initialState);
export const InputsDispatchContext = createContext<Dispatch<Action>>(() => {});

export const useInputs = () => useContext(InputsContext);
export const useInputsDispatch = () => useContext(InputsDispatchContext);
