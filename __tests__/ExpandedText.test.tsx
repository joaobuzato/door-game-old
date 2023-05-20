import * as React from "react";
import { render, screen } from "@testing-library/react";
import ExpandedText from "../components/ExpandedText";
import userEvent from "@testing-library/user-event";

describe("Expanded Text Button", () => {
  const expandedText = {
    id: 1,
    sentence: "Click Here!",
    text: "text is expanding!",
  };

  const user = userEvent.setup();
  const handleClick = jest.fn();

  test("button should render correctly", async () => {
    render(
      <ExpandedText
        onClick={handleClick}
        expandedText={expandedText}
      ></ExpandedText>
    );

    const button = screen.getByRole("button");

    expect(button).toBeVisible;
    expect(button.textContent).toBe(expandedText.sentence);
  });

  test("hide button after click", async () => {
    const expandedText = {
      id: 1,
      sentence: "Click Here!",
      text: "text is expanding!",
    };

    render(
      <ExpandedText
        onClick={handleClick}
        expandedText={expandedText}
      ></ExpandedText>
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(button).not.toBeVisible;
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(expandedText.text);
  });
});
