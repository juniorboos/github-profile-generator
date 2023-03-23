import ReactSelect, {
  components,
  createFilter,
  OptionProps,
} from "react-select";
import Primitives from "@primer/primitives";
import { ComponentProps } from "react";
const { colors } = Primitives;

export interface SelectProps extends ComponentProps<ReactSelect> {
  width?: string | number;
}

interface CustomOptionProps extends OptionProps {
  children: React.ReactNode;
  onMouseMove?: (event: React.MouseEvent) => void;
  onMouseOver?: (event: React.MouseEvent) => void;
}

const CustomOption = ({ children, ...props }: CustomOptionProps) => {
  const { onMouseMove, onMouseOver, ...rest } = props;
  return (
    <components.Option
      {...rest}
      className="hover:bg-blue-100 focus:bg-none text-black"
    >
      {children}
    </components.Option>
  );
};

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
        singleValue: (base) => ({ ...base, color: colors.dark.fg.default }),
        multiValue: (styles) => ({
          ...styles,
          backgroundColor: colors.dark.accent.emphasis,
        }),

        multiValueLabel: (styles) => ({
          ...styles,
          color: colors.dark.fg.onEmphasis,
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          color: colors.dark.fg.onEmphasis,
          ":hover": {
            backgroundColor: colors.dark.accent.fg,
          },
        }),
      }}
      className="text-sm"
      filterOption={createFilter({ ignoreAccents: false })}
      components={{ Option: CustomOption }}
    />
  );
};

export { Select };
