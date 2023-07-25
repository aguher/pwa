import * as React from "react";

interface Props {
  src: string;
}

export const Image = ({ src }: Props) => {
  return (
    <div>
      <img src={src} />
    </div>
  );
};
