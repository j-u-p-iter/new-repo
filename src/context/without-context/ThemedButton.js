import React from "react";
import { Button } from "./Button";

export const ThemedButton = ({ theme, children }) => (
  <Button theme={theme}>{children}</Button>
);
