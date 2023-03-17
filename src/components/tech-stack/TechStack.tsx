import { FormControl } from "@primer/react";
import { useInputs, useInputsDispatch } from "../../context/inputsContext";
import { markdownBadges, OptionsProps } from "../../utils";
import { Select } from "../index";

const TechStack = () => {
  const { techs } = useInputs();
  const dispatch = useInputsDispatch();

  const handleOnChange = (newValue: OptionsProps[]) =>
    dispatch({ type: "SET_TECHS", payload: newValue });

  return (
    <FormControl>
      <FormControl.Label>Tech Stack</FormControl.Label>
      <Select
        isMulti
        placeholder="Choose your techs"
        aria-label="Choose your techs"
        name="markdown-badges"
        options={markdownBadges}
        value={techs}
        onChange={(newValue) => handleOnChange(newValue as OptionsProps[])}
        menuPlacement="auto"
        width="100%"
      />
    </FormControl>
  );
};

export { TechStack };
