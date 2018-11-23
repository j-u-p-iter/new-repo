import React from "react";

export const Button = ({ children, theme }) => (
  <button className={theme}>{children}</button>
);
