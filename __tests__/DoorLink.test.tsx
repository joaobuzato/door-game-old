import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DoorLink } from "../components/DoorLink";

describe("Doors container", () => {
  const door = {
    id: 1,
    path: "1000",
    text: "Porta de madeira",
    color: "#FFD700",
  };

  const user = userEvent.setup();

  test("doors should render correctly", async () => {
    render(<DoorLink door={door}></DoorLink>);
    const doorWrapper = screen.getByTestId("door-wrapper");
    const link = screen.getByTestId("door-address");
    const icon = screen.getByTestId("door-icon");
    const paragraph = screen.getByTestId("door-paragraph");

    expect(paragraph.textContent).toBe(door.text);

    expect(icon).toBeInTheDocument;

    expect(link.getAttribute("href")).toBe(`/game/${door.path}`);
    expect(link).toBeInTheDocument;
    expect(doorWrapper).toBeInTheDocument;
  });
});
