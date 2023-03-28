import { Dispatch, useEffect } from "react";
import { localStorageKey } from "../context/contants";
import { Action, State } from "../context/types";

const usePersistance = (state: State, dispatch: Dispatch<Action>) => {
  useEffect(() => {
    const localStorageState = localStorage.getItem(localStorageKey);
    if (localStorageState) {
      //checking if there already is a state in localstorage
      //if yes, update the current state with the stored one
      dispatch({
        type: "SET_STORE",
        payload: JSON.parse(localStorageState),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);
};

export { usePersistance };
