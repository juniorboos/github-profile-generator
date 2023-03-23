import { useState } from "react";
import { useInputs, useInputsDispatch } from "../context/inputsContext";
import { AboutMeInputProps } from "../context/types";

interface AboutMeHandlerProps {
  about: AboutMeInputProps[];
  isEmojisShown: null | number;
  handleShowEmojis: (idx: number) => void;
  handleOnChange: (
    value: string,
    idx: number,
    field: keyof AboutMeInputProps
  ) => void;
  handleRemoveInput: (idx: number) => void;
  handleAddInput: () => void;
}

const useAboutMeHandler = (): AboutMeHandlerProps => {
  const {
    about: { data },
  } = useInputs();

  const dispatch = useInputsDispatch();
  const [isEmojisShown, setIsEmojisShown] = useState<null | number>(null);

  const handleShowEmojis = (idx: number) => {
    if (idx === isEmojisShown) setIsEmojisShown(null);
    else setIsEmojisShown(idx);
  };

  const handleOnChange = (
    value: string,
    idx: number,
    field: keyof AboutMeInputProps
  ) => dispatch({ type: "SET_ABOUT_INPUT", idx, field, value });

  const handleRemoveInput = (idx: number) =>
    dispatch({ type: "REMOVE_INPUT", section: "about", idx });

  const handleAddInput = () =>
    dispatch({ type: "ADD_INPUT", section: "about" });

  return {
    about: data,
    isEmojisShown,
    handleShowEmojis,
    handleOnChange,
    handleRemoveInput,
    handleAddInput,
  };
};

export { useAboutMeHandler };
export type { AboutMeInputProps, AboutMeHandlerProps };
