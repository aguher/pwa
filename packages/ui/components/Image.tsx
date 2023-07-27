interface Props {
  src: string;
}

export const Image = ({ src }: Props) => {
  return <img src={src} />;
};
