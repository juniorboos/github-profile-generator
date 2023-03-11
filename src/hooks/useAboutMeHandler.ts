import { useState } from "react";
import { InputHandlerProps, useInputHandler } from "./useInputHandler";

interface AboutMeInputProps {
  text: string;
  emoji: string;
}

interface AboutMeHandlerProps extends InputHandlerProps<AboutMeInputProps> {
  isEmojisShown: null | number;
  handleShowEmojis: (idx: number) => void;
}

const useAboutMeHandler = (
  initialState: AboutMeInputProps
): AboutMeHandlerProps => {
  const inputHandler = useInputHandler<AboutMeInputProps>(initialState);
  const [isEmojisShown, setIsEmojisShown] = useState<null | number>(null);

  const handleShowEmojis = (idx: number) => {
    if (idx === isEmojisShown) setIsEmojisShown(null);
    else setIsEmojisShown(idx);
  };

  return {
    ...inputHandler,
    isEmojisShown,
    handleShowEmojis,
  };
};

export { useAboutMeHandler };
export type { AboutMeInputProps, AboutMeHandlerProps };
