import { initialState } from "../../context/contants";
import { getMarkdown } from "../../utils";
import { render, fireEvent } from "../../utils/test";
import { MarkdownPreview } from "./MarkdownPreview";

const markdown = getMarkdown(initialState);

describe("<MarkdownPreview />", () => {
  // TODO: Fix this test as it's not waiting for the component to render
  // test("renders Markdown editor and preview sections", async () => {
  //   await preloadAll();
  //   const { getByRole, getByTestId } = render(<MarkdownPreview />);

  //   const lazyMarkdown = await waitFor(() => getByTestId("markdown-preview"));

  //   expect(lazyMarkdown).toBeInTheDocument();
  //   expect(
  //     getByRole("button", { name: "Go to edit mode" })
  //   ).toBeInTheDocument();
  //   expect(getByRole("button", { name: "Copy markdown" })).toBeInTheDocument();
  // });

  test("switches between edit and preview mode when clicking the toggle button", () => {
    const { getByRole } = render(<MarkdownPreview />);

    const toggleButton = getByRole("button", { name: "Go to edit mode" });
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-label", "Go to preview mode");
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-label", "Go to edit mode");
  });

  test("copies markdown to clipboard when clicking the copy button", async () => {
    const clipboard = { writeText: jest.fn() };
    Object.assign(navigator, { clipboard });

    const { getByRole } = render(<MarkdownPreview />);

    const copyButton = getByRole("button", { name: "Copy markdown" });
    fireEvent.click(copyButton);

    expect(clipboard.writeText).toHaveBeenCalledWith(markdown);
  });
});
