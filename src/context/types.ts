import { SingleValue } from "react-select";
import { OptionsProps } from "../utils";

export interface AboutMeInputProps {
  text: string;
  emoji: string;
}

export interface SocialMediaProps {
  url: string;
  socialMedia?: SingleValue<OptionsProps>;
}

export interface InputsState {
  about: AboutMeInputProps[];
  techs: OptionsProps[];
  githubUser: string;
  socials: SocialMediaProps[];
}

export type Action =
  | { type: "ADD_INPUT"; section: "about" | "socials" }
  | { type: "REMOVE_INPUT"; section: "about" | "socials"; idx: number }
  | {
      type: "SET_ABOUT_INPUT";
      idx: number;
      field: keyof AboutMeInputProps;
      value: string;
    }
  | {
      type: "SET_SOCIAL_URL";
      idx: number;
      value: SocialMediaProps["url"];
    }
  | {
      type: "SET_SOCIAL_MEDIA";
      idx: number;
      value: SocialMediaProps["socialMedia"];
    }
  | { type: "SET_TECHS"; payload: InputsState["techs"] }
  | { type: "SET_GITHUB_USER"; payload: InputsState["githubUser"] };
