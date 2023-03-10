import { FormControl } from "@primer/react";
import Select, { MultiValue } from "react-select";
import { OptionsProps } from "../utils/markdownBadges";

export interface TechStackProps {
  selectedTechs: MultiValue<OptionsProps>;
  techOptions: OptionsProps[];
  onChangeTechs: (newValue: MultiValue<OptionsProps>) => void;
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
        name="markdown-badges"
        options={techOptions}
        styles={{ container: (base) => ({ ...base, width: "100%" }) }}
        value={selectedTechs}
        onChange={onChangeTechs}
      />
    </FormControl>
  );
};

export { TechStack };
