import { FormControl, TextInput } from "@primer/react";
import { ChangeEvent } from "react";
import { useInputs, useInputsDispatch } from "../context/inputsContext";

const GithubStats = () => {
  const { githubUser } = useInputs();
  const dispatch = useInputsDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "SET_GITHUB_USER", payload: e.target.value });

  return (
    <FormControl>
      <FormControl.Label>Github User</FormControl.Label>
      <TextInput
        placeholder="Username"
        value={githubUser}
        onChange={handleOnChange}
        block
      />
    </FormControl>
  );
};

export { GithubStats };
