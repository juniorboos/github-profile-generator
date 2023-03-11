import { MultiValue } from "react-select";
import src from "react-select/dist/declarations/src";
import { InputData } from "../hooks/useInputHandler";
import { OptionsProps } from "./markdownBadges";

type AboutMe = InputData[];
type TechStack = MultiValue<OptionsProps>;

export const getMarkdown = (
  aboutMe: AboutMe,
  techStack: TechStack,
  githubUser: string
) => `# Hello there 👋
# About Me
${aboutMe.map((singleInput) => `- ${singleInput.emoji} ${singleInput.text}`)
  .join(`
`)}
# Tech Stack
${techStack.map((badge) => `${badge.value} `).join("")}
# GitHub Stats
${
  Boolean(githubUser)
    ? `<table align="center" border="0" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <td>
            <img
              src="https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&locale=en&theme=tokyonight"
              alt="${githubUser}'s GitHub Stats"
            />
          </td>
          <td>
            <img
              src="https://streak-stats.demolab.com/?user=${githubUser}&theme=tokyonight"
              alt="${githubUser}'s GitHub Stats"
            />
          </td>
        </tr>
      </thead>
    </table>`
    : ``
}
`;
