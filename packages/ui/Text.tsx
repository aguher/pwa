import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Text = ({ children }: Props) => {
  return (
    <div>
      <h1>Text</h1>
      {children}
    </div>
  );
};
