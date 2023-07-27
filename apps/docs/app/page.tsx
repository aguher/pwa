"use client";

import { Image } from "ui";
import InstallButton from "../utils";

export default function Page() {
  const fetching = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      pagina de docs
      <Image src="https://t4.ftcdn.net/jpg/00/53/45/31/360_F_53453175_hVgYVz0WmvOXPd9CNzaUcwcibiGao3CL.jpg" />
      <InstallButton />
    </>
  );
}
