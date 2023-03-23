import { initialState } from "./contants";
import { State, Action } from "./types";

export const inputsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_INPUT": {
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          data: [
            ...state[action.section].data,
            initialState[action.section].data[0],
          ],
        },
      };
    }
    case "REMOVE_INPUT": {
      const list = state[action.section].data.map((obj) => ({ ...obj }));
      list.splice(action.idx, 1);
      return {
        ...state,
        [action.section]: { ...state[action.section], data: list },
      };
    }
    case "SET_ABOUT_INPUT": {
      const list = state.about.data.map((obj) => ({ ...obj }));
      list[action.idx][action.field] = action.value;
      return { ...state, about: { ...state.about, data: list } };
    }
    case "SET_SOCIAL_URL": {
      const list = state.socials.data.map((obj) => ({ ...obj }));
      list[action.idx].url = action.value;
      return { ...state, socials: { ...state.socials, data: list } };
    }
    case "SET_SOCIAL_MEDIA": {
      const list = state.socials.data.map((obj) => ({ ...obj }));
      list[action.idx].socialMedia = action.value;
      return { ...state, socials: { ...state.socials, data: list } };
    }
    case "SET_TECHS": {
      return { ...state, techs: { ...state.techs, data: action.payload } };
    }
    case "SET_GITHUB_USER": {
      return {
        ...state,
        githubUser: { ...state.githubUser, data: action.payload },
      };
    }
    default: {
      return state;
    }
  }
};
