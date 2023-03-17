import { Box, Button, FormControl, IconButton, TextInput } from "@primer/react";
import { OptionsProps, socialMedias } from "../../utils";
import { MdAddCircleOutline } from "@react-icons/all-files/md/MdAddCircleOutline";
import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";
import { Select } from "../index";
import { useContactMeHandler } from "../../hooks";
import { SocialMediaProps } from "../../context/types";

const ContactMe = () => {
  const {
    socials,
    handleOnChangeUrl,
    handleOnChangeSocialMedia,
    handleRemoveInput,
    handleAddInput,
  } = useContactMeHandler();

  return (
    <FormControl>
      <FormControl.Label>Social Medias</FormControl.Label>
      {socials.map((singleInput, idx) => (
        <Box className="flex w-full gap-2" key={idx}>
          <TextInput
            placeholder="http://example.com"
            value={singleInput.url}
            onChange={(e) => handleOnChangeUrl(e.target.value, idx)}
            className="flex-grow"
          />
          <Select
            options={socialMedias}
            aria-label="Select social media"
            value={singleInput.socialMedia}
            onChange={(e) => handleOnChangeSocialMedia(e as OptionsProps, idx)}
            placeholder="Social"
            menuPlacement="auto"
            width={180}
          />
          <IconButton
            aria-label="Remove"
            onClick={() => handleRemoveInput(idx)}
            icon={MdRemoveCircleOutline}
            variant="danger"
            className="h-[unset]"
            name="Remove"
          />
        </Box>
      ))}
      <Button
        onClick={() => handleAddInput()}
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
