import { Box, Button, FormControl, IconButton, TextInput } from "@primer/react";
import { OptionsProps, socialMedias } from "../utils/markdownBadges";
import { SingleValue } from "react-select";
import { InputHandlerProps } from "../hooks/useInputHandler";
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";
import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";
import { Select } from "./Select";

interface SocialMediaProps {
  url: string;
  socialMedia?: SingleValue<OptionsProps>;
}

const ContactMe = ({
  inputs,
  handleInputChange,
  handleInputRemove,
  handleInputAdd,
}: InputHandlerProps<SocialMediaProps>) => {
  return (
    <FormControl>
      <FormControl.Label>Social Medias</FormControl.Label>
      {inputs.map((singleInput, idx) => (
        <Box className="flex w-full gap-2" key={idx}>
          <TextInput
            placeholder="http://example.com"
            value={singleInput.url}
            onChange={(e) => handleInputChange(e.target.value, idx, "url")}
            className="flex-grow"
          />
          <Select
            options={socialMedias}
            value={singleInput.socialMedia}
            onChange={(e) => handleInputChange(e, idx, "socialMedia")}
            placeholder="Select social"
            menuPlacement="auto"
            width={180}
          />
          <IconButton
            aria-label="Remove"
            onClick={() => handleInputRemove(idx)}
            icon={MdRemoveCircleOutline}
            variant="danger"
          />
        </Box>
      ))}
      <Button
        onClick={() => handleInputAdd()}
        leadingIcon={MdAddCircleOutline}
        variant="outline"
      >
        Add more
      </Button>
    </FormControl>
  );
};

export { ContactMe };
export type { SocialMediaProps };
