import { Box } from "@primer/react";
import { InputHandlerProps } from "../hooks/useInputHandler";
import { AboutMe } from "./AboutMe";
import { TechStack, TechStackProps } from "./TechStack";

type FormProps = InputHandlerProps & TechStackProps;

const Form = ({
  inputList,
  selectedTechs,
  onChangeTechs,
  techOptions,
  ...inputHandlers
}: FormProps) => {
  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        borderRight: "1px solid gray",
        width: "50%",
      }}
    >
      <AboutMe inputList={inputList} {...inputHandlers} />
      <TechStack
        selectedTechs={selectedTechs}
        onChangeTechs={onChangeTechs}
        techOptions={techOptions}
      />
    </Box>
  );
};

export { Form };
