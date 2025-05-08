//
/** TODO: Important steps
 * Does:
 * describe exists
 * it exists
 * test exists
 * getByText
 * render()
 * excpect().toBe()
 */

import { ButtonState, CustomButton } from "./CustomButton";
import { fireEvent, render } from "@testing-library/react"; // isnt found must be imported manually
import "@testing-library/jest-dom"; // isnt found must be imported manually

// DisplayName() JUnit == Collection of Tests
describe("Easy examples", () => {
  // Test #1
  test("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4); // assert
  });

  // Test #2
  test("is 2+4 greater than 0", () => {
    expect(2 + 4).toBeGreaterThan(0);
  });

  // Test #3
  test("2-2 equals 0", () => {
    expect(2 - 2).toBe(0);
  });
});

// TODO -
describe("Custom Button Component States", () => {
  // Idle
  test("Check if button component starts with Idle", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const customButtonComponent = getByText(buttonText);

    expect(customButtonComponent).toHaveClass(ButtonState.idle);
  });
  // Hover
  test("Check if Button Component on hover state changes", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const customButtonComponent = getByText(buttonText);

    expect(customButtonComponent).toHaveClass(ButtonState.idle);
    fireEvent.mouseEnter(customButtonComponent);
    expect(customButtonComponent).toHaveClass(ButtonState.hover);
  });
  // Clicked
  test("Custom Button Component on click state change", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const customButtonComponent = getByText(buttonText);

    expect(customButtonComponent).toHaveClass(ButtonState.idle);
    fireEvent.click(customButtonComponent);
    expect(customButtonComponent).toHaveClass(ButtonState.clicked);
  });
});
