import { Box } from "@primer/react";
import { AboutMe, ContactMe, GithubStats, TechStack } from "./index";

const Inputs = () => {
  return (
    <Box className="flex p-4 flex-col gap-4 md:min-w-[500px]">
      <AboutMe />
      <TechStack />
      <GithubStats />
      <ContactMe />
    </Box>
  );
};

export default Inputs;
