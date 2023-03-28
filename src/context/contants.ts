import { State } from "./types";

const defaultAboutInputs = {
  text: "",
  emoji: "😃",
};

const defaultSocialsInputs = { url: "" };

export const initialState: State = {
  about: { title: "About Me", id: "about-me", data: [defaultAboutInputs] },
  techs: { title: "Tech Stack", id: "tech-stack", data: [] },
  githubUser: { title: "GitHub Stats", id: "github-stats", data: "" },
  socials: {
    title: "Contact Me",
    id: "contact-me",
    data: [defaultSocialsInputs],
  },
  inputsOrder: ["about", "techs", "githubUser", "socials"],
};

export const localStorageKey = "gh-profile-generator";
