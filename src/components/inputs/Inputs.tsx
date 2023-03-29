import { Box } from "@primer/react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { MdDragIndicator } from "react-icons/md";
import { useInputs, useInputsDispatch } from "../../context/inputsContext";
import { InputOrderArray } from "../../context/types";
import { AboutMe, ContactMe, GithubStats, TechStack } from "../index";

const Inputs = () => {
  const inputComponents = {
    about: <AboutMe />,
    techs: <TechStack />,
    githubUser: <GithubStats />,
    socials: <ContactMe />,
  };
  const { inputsOrder } = useInputs();
  const dispatch = useInputsDispatch();

  const getComponent = (input: keyof typeof inputComponents) =>
    inputComponents[input];

  const onDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;

    const newInputsOrder = Array.from(inputsOrder) as InputOrderArray;
    const [removed] = newInputsOrder.splice(result.source.index, 1);
    newInputsOrder.splice(result.destination.index, 0, removed);
    dispatch({ type: "SET_INPUTS_ORDER", payload: newInputsOrder });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <Box
            className="flex p-4 flex-col gap-4 md:w-[500px]"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {inputsOrder.map((input, idx) => (
              <Draggable key={input} draggableId={input} index={idx}>
                {(provided) => (
                  <Box
                    className="flex gap-1"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <Box
                      className="h-fit"
                      aria-label={`Draggable handle for ${input} input`}
                      {...provided.dragHandleProps}
                    >
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
