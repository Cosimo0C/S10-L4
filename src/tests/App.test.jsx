import { render, screen } from "@testing-library/react";
import App from "../App";
test("Welcome is correctly assembled", () => {
  render(<App />);
  const welcome = screen.getByTest(/welcome/i);
  expect(welcome).toBeInTheDocument();
  screen.debug();
});
