import { Box } from "@primer/react";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { AboutMe, ContactMe, GithubStats, TechStack } from "../index";

//  https://codesandbox.io/s/zqwz5n5p9x
const Inputs = () => {
  const defaultInputs = [
    { id: "about-me", Component: AboutMe },
    { id: "tech-stack", Component: TechStack },
    { id: "github-stats", Component: GithubStats },
    { id: "contact-me", Component: ContactMe },
  ];
  const [inputs, setInputs] = useState(defaultInputs);

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
            {inputs.map(({ id, Component }, idx) => (
              <Draggable key={id} draggableId={id} index={idx}>
                {(provided) => (
                  <Box
                    className="flex"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <Box className="grow">
                      <Component />
                    </Box>
                    <Box {...provided.dragHandleProps}>==</Box>
                  </Box>
                )}
              </Draggable>
            ))}

            {/* {provided.placeholder} */}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { Inputs };
