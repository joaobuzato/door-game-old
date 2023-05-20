import * as React from "react";
import { render, screen } from "@testing-library/react";
import ExpandedText from "../components/ExpandedText";
import userEvent from "@testing-library/user-event";
import Doors from "../components/Doors";

describe("Doors container", () => {
  const doors = [
    { id: 1, path: "1000", text: "Porta de madeira", color: "#FFD700" },
    { id: 2, path: "2000", text: "Porta de aço", color: "#808080" },
  ];

  const user = userEvent.setup();

  beforeEach(() => {});

  test("doors should render correctly", async () => {
    render(<Doors doors={doors}></Doors>);
  });
});
