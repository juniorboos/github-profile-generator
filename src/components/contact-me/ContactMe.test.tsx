import { socialMedias } from "../../utils";
import { render, screen, fireEvent } from "../../utils/test";
import { ContactMe } from "./ContactMe";

describe("<ContactMe />", () => {
  it("should render social media inputs", () => {
    render(<ContactMe />);
    const socialMediaInputs =
      screen.getAllByPlaceholderText("http://example.com");
    expect(socialMediaInputs).toHaveLength(1);
  });

  it("should allow adding a new input", () => {
    render(<ContactMe />);
    const addButton = screen.getByRole("button", { name: "Add more" });
    fireEvent.click(addButton);
    expect(screen.getAllByPlaceholderText("http://example.com")).toHaveLength(
      2
    );
  });

  it("should allow removing an input", () => {
    render(<ContactMe />);
    const removeButton = screen.getByRole("button", { name: "Remove" });
    fireEvent.click(removeButton);
    expect(
      screen.queryByPlaceholderText("http://example.com")
    ).not.toBeInTheDocument();
  });

  it("should update the input value when typing into the text input", () => {
    render(<ContactMe />);
    const input = screen.getByPlaceholderText("http://example.com");
    fireEvent.change(input, { target: { value: "Hello, world!" } });
    expect(input).toHaveValue("Hello, world!");
  });

  it("should update the social media value when a new option is selected", () => {
    render(<ContactMe />);
    const socialSelect = screen.getByRole("combobox") as HTMLInputElement;
    const twitter = socialMedias.find((social) => social.label === "Twitter");
    fireEvent.change(socialSelect, { target: { value: twitter?.value } });
    expect(socialSelect).toHaveValue(twitter?.value);
  });
});
