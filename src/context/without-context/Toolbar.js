import React from "react";
import { ThemedButton } from "./ThemedButton";

export const Toolbar = ({ theme }) => (
  <div className="Toolbar">
    <ThemedButton theme={theme}>Push Me</ThemedButton>
  </div>
);
