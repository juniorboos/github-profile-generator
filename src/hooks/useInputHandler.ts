import { useState, ChangeEvent } from "react";

interface InputData {
  text: string;
  emoji: string;
}

interface InputHandlerProps {
  inputList: InputData[];
  isEmojisShown: null | number;
  handleInputAdd: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, idx: number) => void;
  handleEmojiChange: (emoji: string, idx: number) => void;
  handleInputRemove: (idx: number) => void;
  handleShowEmojis: (idx: number) => void;
}

const useInputHandler = (initialState: InputData): InputHandlerProps => {
  const [inputList, setInputList] = useState([initialState]);
  const [isEmojisShown, setIsEmojisShown] = useState<null | number>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value } = e.target;
    const list = [...inputList];
    list[idx].text = value;
    setInputList(list);
  };

  const handleEmojiChange = (emoji: string, idx: number) => {
    const list = [...inputList];
    list[idx].emoji = emoji;
    setInputList(list);
  };

  const handleInputRemove = (idx: number) => {
    const list = [...inputList];
    list.splice(idx, 1);
    setInputList(list);
  };

  const handleInputAdd = () =>
    setInputList((prevInputList) => [...prevInputList, initialState]);

  const handleShowEmojis = (idx: number) => {
    if (idx === isEmojisShown) setIsEmojisShown(null);
    else setIsEmojisShown(idx);
  };

  return {
    inputList,
    isEmojisShown,
    handleInputAdd,
    handleInputChange,
    handleEmojiChange,
    handleInputRemove,
    handleShowEmojis,
  };
};

export { useInputHandler };
export type { InputHandlerProps };
