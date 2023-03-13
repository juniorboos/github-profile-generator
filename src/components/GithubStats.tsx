import { FormControl, TextInput } from "@primer/react";
import { ChangeEventHandler } from "react";

interface GithubStatsProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const GithubStats = ({ value, onChange }: GithubStatsProps) => {
  return (
    <FormControl>
      <FormControl.Label>Github User</FormControl.Label>
      <TextInput
        placeholder="Username"
        value={value}
        onChange={onChange}
        block
      />
    </FormControl>
  );
};

export { GithubStats };
