import { Box } from "@primer/react";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { MdDragIndicator } from "react-icons/md";
import { AboutMe, ContactMe, GithubStats, TechStack } from "../index";

const Inputs = () => {
  const inputComponents = {
    about: <AboutMe />,
    techs: <TechStack />,
    githubUser: <GithubStats />,
    socials: <ContactMe />,
  };

  const getComponent = (input: keyof typeof inputComponents) =>
    inputComponents[input];

  const [inputs, setInputs] = useState(
    Object.keys(inputComponents) as (keyof typeof inputComponents)[]
  );

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) {
      return;
    }

    const newInputs = Array.from(inputs);
    const [removed] = newInputs.splice(result.source.index, 1);
    newInputs.splice(result.destination.index, 0, removed);
    setInputs(newInputs);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Box
            className="flex p-4 flex-col gap-4 md:min-w-[500px]"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {inputs.map((input, idx) => (
              <Draggable key={input} draggableId={input} index={idx}>
                {(provided) => (
                  <Box
                    className="flex gap-1"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <Box className="h-fit" {...provided.dragHandleProps}>
                      <MdDragIndicator size={20} />
                    </Box>
                    <Box className="grow">{getComponent(input)}</Box>
                  </Box>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { Inputs };
