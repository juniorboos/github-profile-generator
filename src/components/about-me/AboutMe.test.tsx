import { render, screen, fireEvent } from "../../utils/test";
import { AboutMe } from "./AboutMe";

import fetch from "node-fetch";
import { TextDecoder } from "text-encoding";

(globalThis as any).TextDecoder = TextDecoder;
(globalThis as any).fetch = fetch;

describe("<AboutMe />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render the AboutMe component", () => {
    render(<AboutMe />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("should allow adding a new input", async () => {
    render(<AboutMe />);
    const addButton = screen.getByRole("button", { name: "Add more" });
    fireEvent.click(addButton);

    expect(screen.getAllByPlaceholderText("Description")).toHaveLength(2);
  });

  it("should allow removing an input", () => {
    render(<AboutMe />);
    const removeButton = screen.getByRole("button", { name: "Remove" });
    fireEvent.click(removeButton);
    expect(
      screen.queryByPlaceholderText("Description")
    ).not.toBeInTheDocument();
  });

  it("should show emoji picker when clicking on the emoji button", () => {
    render(<AboutMe />);
    const emojiButton = screen.getByLabelText("Select emoji");
    fireEvent.click(emojiButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should update the input value when typing into the text input", () => {
    render(<AboutMe />);
    const input = screen.getByPlaceholderText("Description");
    fireEvent.change(input, { target: { value: "Hello, world!" } });
    expect(input).toHaveValue("Hello, world!");
  });
});
