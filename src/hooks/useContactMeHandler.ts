import { useInputs, useInputsDispatch } from "../context/inputsContext";
import { SocialMediaInputProps } from "../context/types";
import { OptionsProps } from "../utils";

interface ContactMeHandlerProps {
  socials: SocialMediaInputProps[];
  handleOnChangeUrl: (value: string, idx: number) => void;
  handleOnChangeSocialMedia: (value: OptionsProps, idx: number) => void;
  handleRemoveInput: (idx: number) => void;
  handleAddInput: () => void;
}

const useContactMeHandler = (): ContactMeHandlerProps => {
  const {
    socials: { data },
  } = useInputs();
  const dispatch = useInputsDispatch();

  const handleOnChangeUrl = (value: string, idx: number) =>
    dispatch({ type: "SET_SOCIAL_URL", idx, value });

  const handleOnChangeSocialMedia = (value: OptionsProps, idx: number) =>
    dispatch({ type: "SET_SOCIAL_MEDIA", idx, value });

  const handleRemoveInput = (idx: number) =>
    dispatch({ type: "REMOVE_INPUT", section: "socials", idx });

  const handleAddInput = () =>
    dispatch({ type: "ADD_INPUT", section: "socials" });

  return {
    socials: data,
    handleOnChangeUrl,
    handleOnChangeSocialMedia,
    handleRemoveInput,
    handleAddInput,
  };
};

export { useContactMeHandler };
export type { ContactMeHandlerProps };
