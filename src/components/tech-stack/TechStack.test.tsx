import { render, fireEvent, screen } from "../../utils/test";
import { TechStack } from "./TechStack";
import { markdownBadges } from "../../utils";

describe("<TechStack />", () => {
  it("should render the TechStack component", () => {
    render(<TechStack />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("displays a select input", () => {
    render(<TechStack />);
    const selectInput = screen.getByRole("combobox");
    expect(selectInput).toBeInTheDocument();
  });

  it("displays options in the select input", () => {
    render(<TechStack />);
    const selectInput = screen.getByRole("combobox");
    fireEvent.mouseDown(selectInput);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(markdownBadges.length);
    markdownBadges.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("selects options", () => {
    render(<TechStack />);
    const selectInput = screen.getByRole("combobox") as HTMLInputElement;
    fireEvent.mouseDown(selectInput);
    const option = screen.getByText(markdownBadges[0].label);
    fireEvent.click(option);
    expect(screen.getByText(markdownBadges[0].label)).toBeDefined();
  });
});
