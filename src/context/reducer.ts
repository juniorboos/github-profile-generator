import { initialInputs } from "./contants";
import { InputsState, Action } from "./types";

export const inputsReducer = (inputs: InputsState, action: Action) => {
  switch (action.type) {
    case "ADD_INPUT": {
      return {
        ...inputs,
        [action.section]: [
          ...inputs[action.section],
          initialInputs[action.section][0],
        ],
      };
    }
    case "REMOVE_INPUT": {
      const list = inputs[action.section].map((obj) => ({ ...obj }));
      list.splice(action.idx, 1);
      return { ...inputs, [action.section]: list };
    }
    case "SET_ABOUT_INPUT": {
      const list = inputs.about.map((obj) => ({ ...obj }));
      list[action.idx][action.field] = action.value;
      return { ...inputs, about: list };
    }
    case "SET_SOCIAL_URL": {
      const list = inputs.socials.map((obj) => ({ ...obj }));
      list[action.idx].url = action.value;
      return { ...inputs, socials: list };
    }
    case "SET_SOCIAL_MEDIA": {
      const list = inputs.socials.map((obj) => ({ ...obj }));
      list[action.idx].socialMedia = action.value;
      return { ...inputs, socials: list };
    }
    case "SET_TECHS": {
      return { ...inputs, techs: action.payload };
    }
    case "SET_GITHUB_USER": {
      return { ...inputs, githubUser: action.payload };
    }
    default: {
      return inputs;
    }
  }
};
