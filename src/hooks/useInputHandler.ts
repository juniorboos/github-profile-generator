import { useState, ChangeEvent } from "react";

interface InputData {
  text: string;
  emoji: string;
}

const useInputHandler = (initialState: InputData) => {
  const [inputList, setInputList] = useState([initialState]);
  const [isEmojisShown, setIsEmojisShown] = useState<null | number>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].text = value;
    setInputList(list);
  };

  const handleEmojiChange = (emoji: string, index: number) => {
    const list = [...inputList];
    list[index].emoji = emoji;
    setInputList(list);
  };

  const handleInputRemove = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
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
