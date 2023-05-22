import * as React from "react";
import { render, screen } from "@testing-library/react";
import ExpandedTextWrapper from "../components/ExpandedTextWrapper";
import userEvent from "@testing-library/user-event";

describe("Doors container", () => {
  const expandedTexts = [
    {
      id: 1,
      sentence: "Olhar em volta",
      text: "Você olha em volta.",
    },
    {
      id: 2,
      sentence: "Olhar no teste",
      text: "Você olha no teste.",
    },
  ];
  const user = userEvent.setup();
  const clickHandler = jest.fn();

  test("wrapper should render correctly", async () => {
    render(
      <ExpandedTextWrapper
        expandedTexts={expandedTexts}
        onClick={clickHandler}
      ></ExpandedTextWrapper>
    );

    const wrapper = await screen.findByTestId("expanded-texts-wrapper");

    const texts = wrapper.children;

    expect(texts[0].textContent).toBe(expandedTexts[0].sentence);
    expect(texts[1].textContent).toBe(expandedTexts[1].sentence);
    expect(wrapper).toBeInTheDocument;
    expect(wrapper.childElementCount).toBe(2);
  });
  test("wrapper should call onClick with text", async () => {
    render(
      <ExpandedTextWrapper
        expandedTexts={expandedTexts}
        onClick={clickHandler}
      ></ExpandedTextWrapper>
    );
    const wrapper = await screen.findByTestId("expanded-texts-wrapper");
    const texts = wrapper.children;

    await user.click(texts[0]);
    await user.click(texts[1]);

    expect(clickHandler).toHaveBeenCalledTimes(2);
    expect(clickHandler).toHaveBeenNthCalledWith(1, expandedTexts[0].text);
    expect(clickHandler).toHaveBeenNthCalledWith(2, expandedTexts[1].text);
  });
});
