import * as React from "react";
import { render, screen } from "@testing-library/react";
import ExpandedText from "../components/ExpandedText";
import userEvent from "@testing-library/user-event";

test("hide button after click", async () => {
  const user = userEvent.setup();
  function handleClick(text: string) {
    console.log(text);
  }
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

  const button = await screen.findByTestId(`expanded-text-${expandedText.id}`);

  await user.click(button);
});
