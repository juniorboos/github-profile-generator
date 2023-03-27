import { render } from "../../utils/test";
import { initialState } from "../../context/contants";
import { Inputs } from "./Inputs";

describe("<Inputs />", () => {
  it("should render draggable items in the correct order", () => {
    const { container } = render(<Inputs />);

    const draggableItems = container.querySelectorAll(
      "[data-rbd-draggable-context-id='0']"
    );

    initialState.inputsOrder.forEach((input, idx) =>
      expect(draggableItems[idx].getAttribute("data-rbd-draggable-id")).toEqual(
        input
      )
    );
  });
});
