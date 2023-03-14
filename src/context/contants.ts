const defaultAboutInputs = {
  text: "",
  emoji: "😃",
};

const defaultSocialsInputs = { url: "" };

export const initialInputs = {
  about: [defaultAboutInputs],
  techs: [],
  githubUser: "",
  socials: [{ ...defaultSocialsInputs }],
} as const;

export const getDefaultInputs = (section: "about" | "socials") => {
  if (section === "about") return defaultAboutInputs;

  return defaultSocialsInputs;
};
