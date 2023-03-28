import { SingleValue } from "react-select";
import { OptionsProps } from "../utils";

export interface AboutMeInputProps {
  text: string;
  emoji: string;
}

export interface SocialMediaInputProps {
  url: string;
  socialMedia?: SingleValue<OptionsProps>;
}

interface InputGroup<T> {
  title: string;
  id: string;
  data: T;
}

export interface InputsState {
  about: InputGroup<AboutMeInputProps[]>;
  techs: InputGroup<OptionsProps[]>;
  githubUser: InputGroup<string>;
  socials: InputGroup<SocialMediaInputProps[]>;
}

type InputsStateKeys = keyof InputsState;

type Permute<T, U = T> = [T] extends [never] // If T is an empty tuple
  ? [] // Return an empty tuple
  : U extends any // Otherwise, if U can be any type
  ? [U, ...Permute<Exclude<T, U>>] // Add U to the front of each permutation of T without U
  : never; // If U can't be any type, return never

export type InputOrderArray = Permute<InputsStateKeys>;

export interface State extends InputsState {
  inputsOrder: InputOrderArray;
}

export type Action =
  | { type: "SET_STORE"; payload: State }
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
      value: SocialMediaInputProps["url"];
    }
  | {
      type: "SET_SOCIAL_MEDIA";
      idx: number;
      value: SocialMediaInputProps["socialMedia"];
    }
  | { type: "SET_TECHS"; payload: InputsState["techs"]["data"] }
  | { type: "SET_GITHUB_USER"; payload: InputsState["githubUser"]["data"] }
  | { type: "SET_INPUTS_ORDER"; payload: InputOrderArray };
