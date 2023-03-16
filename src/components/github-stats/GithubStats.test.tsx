import { fireEvent, render, screen } from "../../utils/test";
import { GithubStats } from "./GithubStats";

describe("<GithubStats />", () => {
  test("should render a label and an input", () => {
    render(<GithubStats />);

    expect(screen.getByLabelText("Github User")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  });

  test("should dispatch action when input value changes", () => {
    render(<GithubStats />);
    const input = screen.getByPlaceholderText("Username") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "testuser" } });
    expect(input.value).toBe("testuser");
  });
});
