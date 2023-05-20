import * as React from "react";
import { render, screen } from "@testing-library/react";
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
    const title = await screen.findByRole("heading", { level: 3 });
    const container = await screen.findByTestId("doors-container");

    expect(title).toBeInTheDocument;
    expect(title.textContent).toBe("Em qual porta entrar?");
    expect(container).toBeInTheDocument;
    expect(container.childElementCount).toBe(2);
  });
});
