import React from "react";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

export default function ButtonContainer() {
  return (
    <div className = "button-container">
      <NumberButton />
      <ActionButton />
    </div>
  )
}
