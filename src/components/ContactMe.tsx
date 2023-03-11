import { Box, Button, FormControl, IconButton, TextInput } from "@primer/react";
import { OptionsProps, socialMedias } from "../utils/markdownBadges";
import Select, { SingleValue } from "react-select";
import { InputHandlerProps } from "../hooks/useInputHandler";
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";
import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";

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
        <Box sx={{ display: "flex", width: "100%", gap: "0.5rem" }}>
          <TextInput
            placeholder="http://..."
            value={singleInput.url}
            onChange={(e) => handleInputChange(e.target.value, idx, "url")}
            sx={{ flexGrow: 1 }}
          />
          <Select
            options={socialMedias}
            styles={{ container: (base) => ({ ...base, width: 180 }) }}
            value={singleInput.socialMedia}
            onChange={(e) => handleInputChange(e, idx, "socialMedia")}
            placeholder="Select social"
          />
          <IconButton
            aria-label="Remove"
            onClick={() => handleInputRemove(idx)}
            icon={MdRemoveCircleOutline}
            variant="danger"
            sx={{ height: "auto" }}
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
