import { FormControl } from "@primer/react";
import { ActionMeta, MultiValue } from "react-select";
import { OptionsProps } from "../utils/markdownBadges";
import { Select } from "./Select";
export interface TechStackProps {
  selectedTechs: MultiValue<OptionsProps>;
  techOptions: OptionsProps[];
  onChangeTechs: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
}

const TechStack = ({
  selectedTechs,
  onChangeTechs,
  techOptions,
}: TechStackProps) => {
  return (
    <FormControl>
      <FormControl.Label>Tech Stack</FormControl.Label>
      <Select
        isMulti
        placeholder="Choose your techs"
        name="markdown-badges"
        options={techOptions}
        value={selectedTechs}
        onChange={onChangeTechs}
        menuPlacement="auto"
        width="100%"
      />
    </FormControl>
  );
};

export { TechStack };
