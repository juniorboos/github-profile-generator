import { InputsState, SocialMediaInputProps, State } from "../context/types";
import { AboutMeInputProps } from "../hooks";
import { OptionsProps } from "./markdownBadges";

type AboutMe = AboutMeInputProps[];
type TechStack = OptionsProps[];
type ContactMe = SocialMediaInputProps[];

const inputToMarkdown = (input: InputsState[keyof InputsState]) => {
  let markdown = `
# ${input.title}
`;
  switch (input.id) {
    case "about-me":
      markdown =
        markdown +
        `${(input.data as AboutMe).map(
          (singleInput) =>
            singleInput.text && `- ${singleInput.emoji} ${singleInput.text}`
        ).join(`
`)}`;
      break;
    case "tech-stack":
      markdown =
        markdown +
        `${(input.data as TechStack)
          .map((badge) => `${badge.value}`)
          .join(" ")}`;
      break;
    case "github-stats":
      markdown =
        markdown +
        `${
          Boolean(input.data)
            ? `<table align="center" border="0" cellpadding="0" cellspacing="0">
  <thead>
    <tr>
      <td>
        <img
          src="https://github-readme-stats.vercel.app/api?username=${input.data}&show_icons=true&locale=en&theme=tokyonight&count_private=true"
          alt="GitHub Stats"
        />
      </td>
      <td>
        <img
          src="https://streak-stats.demolab.com/?user=${input.data}&theme=tokyonight"
          alt="GitHub Stats"
        />
      </td>
    </tr>
  </thead>
</table>`
            : ``
        }`;
      break;
    case "contact-me":
      markdown =
        markdown +
        `${(input.data as ContactMe)
          ?.map(
            (social) =>
              social.socialMedia &&
              `[${social.socialMedia?.value}](${social.url})`
          )
          .join(" ")}`;
      break;
    default:
      break;
  }
  return markdown;
};

export const getMarkdown = ({
  inputsOrder,
  ...inputs
}: State) => `# Hello there 👋
${inputsOrder?.map((id) => `${inputToMarkdown(inputs[id])}`).join(`
`)}
`;
