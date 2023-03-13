import ReactSelect from "react-select";
import Primitives from "@primer/primitives";
import { ComponentProps } from "react";
const { colors } = Primitives;

export interface SelectProps extends ComponentProps<ReactSelect> {
  width?: string | number;
}

const Select = ({ width, ...props }: SelectProps) => {
  return (
    <ReactSelect
      {...props}
      styles={{
        container: (base) => ({ ...base, width: width ?? "auto" }),
        control: (base) => ({
          ...base,
          background: "transparent",
          borderColor: colors.dark.border.default,
        }),
        input: (base) => ({ ...base, color: colors.dark.fg.default }),
      }}
      className="text-sm"
    />
  );
};

export { Select };
