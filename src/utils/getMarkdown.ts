import { MultiValue } from "react-select";
import { InputData } from "../hooks/useInputHandler";
import { OptionsProps } from "./markdownBadges";

type AboutMe = InputData[];
type TechStack = MultiValue<OptionsProps>;

export const getMarkdown = (
  aboutMe: AboutMe,
  techStack: TechStack
) => `# Hello there 👋
# About Me
${aboutMe.map((singleInput) => `- ${singleInput.emoji} ${singleInput.text}`)
  .join(`
`)}
# Tech Stack
${techStack.map((badge) => `${badge.value} `).join("")}
`;
