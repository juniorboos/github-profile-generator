import { MultiValue } from "react-select";
import { SocialMediaProps } from "../components";
import { AboutMeInputProps } from "../hooks";
import { OptionsProps } from "./markdownBadges";

type AboutMe = AboutMeInputProps[];
type TechStack = MultiValue<OptionsProps>;
type ContactMe = SocialMediaProps[];

export const getMarkdown = (
  aboutMe?: AboutMe,
  techStack?: TechStack,
  githubUser?: string,
  contactMeInputs?: ContactMe
) => `# Hello there 👋


# About Me
${aboutMe?.map(
  (singleInput) =>
    singleInput.text && `- ${singleInput.emoji} ${singleInput.text}`
).join(`
`)}

# Tech Stack
${techStack?.map((badge) => `${badge.value}`).join(" ")}

# GitHub Stats
${
  Boolean(githubUser)
    ? `<table align="center" border="0" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <td>
            <img
              src="https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&locale=en&theme=tokyonight"
              alt="GitHub Stats"
            />
          </td>
          <td>
            <img
              src="https://streak-stats.demolab.com/?user=${githubUser}&theme=tokyonight"
              alt="GitHub Stats"
            />
          </td>
        </tr>
      </thead>
    </table>
`
    : ``
}

# Contact Me
${contactMeInputs
  ?.map(
    (social) =>
      social.socialMedia && `[${social.socialMedia?.value}](${social.url})`
  )
  .join(" ")}
`;
