/* TODO - Have we interacted with the button
 *  Check for states, for hover, clicked and idle
 *  


 */

import { useState } from "react";

// ENUM - 3 different states for button
// IDLE | HOVER | CLICKED
export enum ButtonState {
  idle = "idle",
  hover = "hover",
  clicked = "clicked",
}

// You lose on: Refactor capabilities, Immutability (Gain in performance)
type ButtonStateTwo = "idle" | "hover" | "clicked";

// Interface - PROPS

interface CustomButtonProps {
  buttonText: string;
}

export function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle);
  const [buttonStateTwo, setButtonStateTwo] = useState<ButtonStateTwo>("idle");

  return (
    <input
      type="button"
      value={props.buttonText}
      className={buttonState}
      onMouseEnter={() => {
        setButtonState(ButtonState.hover);
      }}
      onMouseLeave={() => {
        setButtonState(ButtonState.idle);
      }}
      onClick={() => {
        setButtonState(ButtonState.clicked);
      }}
    />
  );
}
