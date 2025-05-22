import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe } from "vitest";
import Welcome from "../components/Welcome";
test("Welcome is correctly assembled", () => {
  render(<Welcome />);
  const welcome = screen.getByTest(/welcome/i);
  expect(welcome).toBeInTheDocument();
  screen.debug();
});
